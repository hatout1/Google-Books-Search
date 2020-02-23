const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Welcome</h1>");
});

router.get("/api", (req, res) => {
    res.send("<h1>API Route</h1>");
});

module.exports = router;
