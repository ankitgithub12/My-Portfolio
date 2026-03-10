const { chromium } = require('playwright');
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 300 }); // Refresh every 5 minutes

async function getGFGStats(username) {
    const cacheKey = `gfg_${username}`;
    const cached = cache.get(cacheKey);

    if (cached) {
        console.log("Returning cached GFG data for:", username);
        return cached;
    }

    let browser = null;
    let context = null;
    let page = null;
    
    try {
        console.log(`Launching browser for ${username}...`);
        
        browser = await chromium.launch({
            headless: true, // Set to false for debugging if needed
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        context = await browser.newContext({
            viewport: { width: 1280, height: 800 },
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        });
        
        page = await context.newPage();
        
        // --- NAVIGATE TO MAIN PROFILE ---
        const profileUrl = `https://www.geeksforgeeks.org/profile/${username}`;
        console.log(`Navigating to main profile: ${profileUrl}...`);
        
        // Go to page and wait for network to be mostly idle
        await page.goto(profileUrl, { 
            waitUntil: 'networkidle',
            timeout: 30000 
        });
        
        // Take a screenshot for debugging (optional - uncomment to save)
        // await page.screenshot({ path: 'gfg-profile.png' });
        
        console.log('Waiting for main stats to load...');
        
        // --- EXTRACT MAIN STATS USING SPECIFIC LOCATORS ---
        // We'll find elements by their text content and then get the number from the next element
        
        // Helper function to extract stats reliably by searching for the label in the DOM
        const getStatValue = async (labelText) => {
            try {
                return await page.evaluate((label) => {
                    // Find node with exact text match
                    const xpath = `//*[text()='${label}' or contains(text(), '${label}')]`;
                    const result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                    
                    for (let i = 0; i < result.snapshotLength; i++) {
                        const el = result.snapshotItem(i);
                        // Make sure it doesn't have many children (we want the innermost element)
                        if (el.children.length <= 1) {
                            let current = el;
                            // Go up to 3 parent levels looking for a number
                            for (let j = 0; j < 3; j++) {
                                current = current.parentElement;
                                if (!current) break;
                                
                                // Get text content strictly from this level
                                const text = current.textContent.replace(label, '').trim();
                                const match = text.match(/(\d+(?:,\d+)*)/);
                                if (match) {
                                    const parsed = parseInt(match[1].replace(/,/g, ''));
                                    if (!isNaN(parsed)) return parsed;
                                }
                            }
                        }
                    }
                    return 0;
                }, labelText);
            } catch (error) {
                console.log(`Could not find value for label: ${labelText}`, error.message);
                return 0;
            }
        };
        
        // Alternative: Find by looking for the number right after the label in the DOM structure
        const getStatByParent = async (labelText) => {
            try {
                // Find parent div that contains the label, then find the number div inside it
                const parentDiv = await page.locator(`div:has-text("${labelText}")`).first();
                const numberDiv = await parentDiv.locator('div >> nth=1').first(); // Adjust selector as needed
                const numberText = await numberDiv.textContent();
                const match = numberText.match(/(\d+(?:,\d+)?)/);
                return match ? parseInt(match[1].replace(/,/g, '')) : 0;
            } catch (error) {
                console.log(`Could not find parent-based value for: ${labelText}`);
                return 0;
            }
        };
        
        // Extract each stat with retry logic
        let codingScore = 0;
        let problemsSolved = 0;
        let instituteRank = 0;
        let longestStreak = 0;
        let potdsSolved = 0;
        
        // Try multiple times with small delays
        for (let attempt = 0; attempt < 3; attempt++) {
            console.log(`Attempt ${attempt + 1} to extract main stats...`);
            
            // Try different methods
            codingScore = codingScore || await getStatValue('Coding Score');
            problemsSolved = problemsSolved || await getStatValue('Problems Solved');
            instituteRank = instituteRank || await getStatValue('Institute Rank');
            
            // Special handling for Longest Streak which has colon
            try {
                const streakElement = await page.locator('text=Longest Streak:').first();
                const streakParent = await streakElement.locator('xpath=..');
                const streakText = await streakParent.textContent();
                const streakMatch = streakText.match(/(\d+)\s*Days?/i);
                if (streakMatch) longestStreak = parseInt(streakMatch[1]);
            } catch (e) { /* ignore */ }
            
            // Special handling for POTDs Solved
            try {
                const potdElement = await page.locator('text=POTDs Solved').first();
                const potdValue = await potdElement.locator('xpath=following-sibling::*').first();
                const potdText = await potdValue.textContent();
                const potdMatch = potdText.match(/(\d+)/);
                if (potdMatch) potdsSolved = parseInt(potdMatch[1]);
            } catch (e) { /* ignore */ }
            
            // If we have all values, break
            if (codingScore && problemsSolved && instituteRank) break;
            
            // Wait a bit before retrying
            await page.waitForTimeout(2000);
        }
        
        const mainStats = {
            codingScore,
            problemsSolved,
            instituteRank,
            longestStreak,
            potdsSolved
        };
        
        console.log('Main stats extracted:', mainStats);
        
        // --- NAVIGATE TO ACTIVITY TAB ---
        const activityUrl = `${profileUrl}?tab=activity`;
        console.log(`Navigating to activity tab: ${activityUrl}...`);
        
        await page.goto(activityUrl, { 
            waitUntil: 'networkidle',
            timeout: 30000 
        });
        
        await page.waitForTimeout(3000); // Extra wait for dynamic content
        
        // --- EXTRACT CURRENT STREAK AND BREAKDOWN FROM ACTIVITY TAB ---
        
        // Get current streak
        let currentStreak = 0;
        try {
            const streakText = await page.locator('text=Day POTD Streak').first();
            const streakValue = await streakText.locator('xpath=preceding-sibling::*').first();
            const streakNumber = await streakValue.textContent();
            currentStreak = parseInt(streakNumber) || 0;
            console.log(`Found current streak: ${currentStreak}`);
        } catch (e) {
            console.log('Could not find current streak, trying alternative method...');
            try {
                const bodyText = await page.textContent('body');
                const streakMatch = bodyText.match(/(\d+)\s*Day\s*POTD\s*Streak/i);
                if (streakMatch) currentStreak = parseInt(streakMatch[1]);
            } catch (e2) { /* ignore */ }
        }
        
        // Extract problem breakdown using precise selectors
        const breakdown = await page.evaluate(() => {
            const bodyText = document.body.innerText;
            
            // Look for the patterns with parentheses - these are reliable
            const schoolMatch = bodyText.match(/SCHOOL\s*\((\d+)\)/i);
            const basicMatch = bodyText.match(/BASIC\s*\((\d+)\)/i);
            const easyMatch = bodyText.match(/EASY\s*\((\d+)\)/i);
            const mediumMatch = bodyText.match(/MEDIUM\s*\((\d+)\)/i);
            const hardMatch = bodyText.match(/HARD\s*\((\d+)\)/i);
            
            return {
                school: schoolMatch ? parseInt(schoolMatch[1]) : 0,
                basic: basicMatch ? parseInt(basicMatch[1]) : 0,
                easy: easyMatch ? parseInt(easyMatch[1]) : 0,
                medium: mediumMatch ? parseInt(mediumMatch[1]) : 0,
                hard: hardMatch ? parseInt(hardMatch[1]) : 0
            };
        });
        
        console.log('Problem breakdown:', breakdown);
        
        await browser.close();
        
        // --- COMBINE ALL STATS ---
        const finalStats = {
            platform: "GeeksforGeeks",
            username,
            profile: profileUrl,
            stats: {
                codingScore: mainStats.codingScore || 0,
                problemsSolved: mainStats.problemsSolved || 0,
                instituteRank: mainStats.instituteRank || 0,
                currentStreak: currentStreak || 0,
                longestStreak: mainStats.longestStreak || 0,
                potdsSolved: mainStats.potdsSolved || 0
            },
            problemBreakdown: {
                ...breakdown,
                total: breakdown.school + breakdown.basic + breakdown.easy + breakdown.medium + breakdown.hard
            }
        };
        
        // Validate and warn if expected data is missing
        console.log('Final GFG Stats:', JSON.stringify(finalStats, null, 2));
        
        if (finalStats.stats.codingScore === 0) {
            console.warn('WARNING: Coding Score is 0. Expected 1245.');
        }
        if (finalStats.stats.problemsSolved === 0) {
            console.warn('WARNING: Problems Solved is 0. Expected 550.');
        }
        if (finalStats.stats.instituteRank === 0) {
            console.warn('WARNING: Institute Rank is 0.');
        }
        if (finalStats.stats.longestStreak === 0) {
            console.warn('WARNING: Longest Streak is 0. Expected 73.');
        }
        if (finalStats.stats.potdsSolved === 0) {
            console.warn('WARNING: POTDs Solved is 0. Expected 166.');
        }
        
        cache.set(cacheKey, finalStats);
        return finalStats;
        
    } catch (error) {
        console.error(`GFG fetch failed for ${username}:`, error.message);
        console.error('Full error:', error);
        
        if (browser) {
            await browser.close().catch(console.error);
        }
        
        return {
            platform: "GeeksforGeeks",
            username,
            profile: `https://www.geeksforgeeks.org/profile/${username}`,
            status: "unavailable",
            error: error.message,
            stats: {
                codingScore: 0,
                problemsSolved: 0,
                instituteRank: 0,
                currentStreak: 0,
                longestStreak: 0,
                potdsSolved: 0
            },
            problemBreakdown: {
                school: 0,
                basic: 0,
                easy: 0,
                medium: 0,
                hard: 0,
                total: 0
            }
        };
    }
}

module.exports = { getGFGStats };