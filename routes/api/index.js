const router = require("express").Router();
const watchlistRoutes = require("./watchlistRoutes");
// Book routes
router.use("/onestockpersector", watchlistRoutes);
module.exports = router;

