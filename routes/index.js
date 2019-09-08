const path = require("path");
const router = require("express").Router();
// const passport = require("../passport");
const apiRoutes = require("./api");

// API Routes
// router.use("/", authRoutes);

// router.use("/api/upload", uploadRoutes);

// API Routes
router.use("/api", apiRoutes);

module.exports = router;