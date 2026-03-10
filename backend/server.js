const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const leetcodeService = require("./services/leetcode");
const gfgService = require("./services/gfg");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:5173"
    ]
}));

app.get("/api/health", (req, res) => {
    res.json({ status: "OK" });
});

app.get("/api/stats/:leetcodeUsername/:gfgUsername", async (req, res) => {
    // Set timeout for this request
    req.setTimeout(30000); // 30 seconds
    

    try {

        const { leetcodeUsername, gfgUsername } = req.params;
        const timeout = (prom, time) => Promise.race([
            prom,
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout')), time)
            )
        ]);

        const [leetcodeStats, gfgStats] = await Promise.allSettled([
            timeout(leetcodeService.getLeetCodeStats(leetcodeUsername), 15000),
            timeout(gfgService.getGFGStats(gfgUsername), 45000)
        ]);

        res.json({
            leetcode: leetcodeStats.status === "fulfilled"
                ? leetcodeStats.value
                : { error: "LeetCode fetch failed" },

            gfg: gfgStats.status === "fulfilled"
                ? gfgStats.value
                : { error: "GFG fetch failed" }
        });

    } catch (error) {

        res.status(500).json({
            error: "Internal server error"
        });
    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});