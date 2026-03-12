const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 300 });

async function getGFGStats(username) {

    const cacheKey = `gfg_${username}`;
    const cached = cache.get(cacheKey);

    if (cached) {
        console.log("Returning cached GFG data for:", username);
        return cached;
    }

    // Hardcoded stats
    const finalStats = {
        platform: "GeeksforGeeks",
        username: "ankit6ewub",
        profile: "https://www.geeksforgeeks.org/profile/ankit6ewub",
        stats: {
            codingScore: 1245,
            problemsSolved: 553,
            instituteRank: 348,
            currentStreak: 0,
            longestStreak: 73,
            potdsSolved: 168
        },
        problemBreakdown: {
            school: 0,
            basic: 150,
            easy: 250,
            medium: 137,
            hard: 16,
            total: 553
        }
    };

    cache.set(cacheKey, finalStats);

    return finalStats;
}

module.exports = { getGFGStats };