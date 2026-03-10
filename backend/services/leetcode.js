const axios = require('axios');
const NodeCache = require('node-cache');

// Cache with 1 hour TTL
const cache = new NodeCache({ stdTTL: 3600 });

/**
 * Fetches LeetCode user statistics using GraphQL API
 * @param {string} username - LeetCode username
 * @returns {Promise<Object>} User's solved problems stats
 */
async function getLeetCodeStats(username) {
    try {
        // Check cache first
        const cacheKey = `leetcode_${username}`;
        const cachedData = cache.get(cacheKey);
        
        if (cachedData) {
            console.log('Returning cached LeetCode data for:', username);
            return cachedData;
        }

        // LeetCode GraphQL API endpoint
        const graphqlEndpoint = 'https://leetcode.com/graphql';
        
        // GraphQL query to fetch user's problem stats
        const query = `
            query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    submitStats {
                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                    }
                }
            }
        `;

        const response = await axios.post(graphqlEndpoint, {
            query,
            variables: { username }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        // Check if user exists
        if (!response.data.data || !response.data.data.matchedUser) {
            throw new Error('LeetCode user not found');
        }

        // Extract submission stats
        const submissions = response.data.data.matchedUser.submitStats.acSubmissionNum;
        
        // Format the stats
        const stats = {
            easy: submissions.find(s => s.difficulty === 'Easy')?.count || 0,
            medium: submissions.find(s => s.difficulty === 'Medium')?.count || 0,
            hard: submissions.find(s => s.difficulty === 'Hard')?.count || 0,
            total: submissions.find(s => s.difficulty === 'All')?.count || 0
        };

        // Store in cache
        cache.set(cacheKey, stats);
        
        return stats;
    } catch (error) {
        console.error('LeetCode API Error:', error.message);
        throw new Error(`Failed to fetch LeetCode data: ${error.message}`);
    }
}

module.exports = { getLeetCodeStats };