const router = require("express").Router();
const watchlistRoutes = require("./watchlistRoutes");
// Book routes
router.use("/watchlist", watchlistRoutes);
module.exports = router;