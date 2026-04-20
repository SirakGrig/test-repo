const express = require("express");

const app = express();
const PORT = 3001;

// simple health check
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "API is running 4 commit",
        time: new Date().toISOString()
    });
});


// simple test route
app.get("/hello", (req, res) => {
    res.json({
        message: "Hello from Express API 🚀"
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
