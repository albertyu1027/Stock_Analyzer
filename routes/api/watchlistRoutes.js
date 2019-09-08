const router = require("express").Router();
const watchlistController = require("../../controllers/watchlistController");

// Matches with "/api/books"
router.route("/")
  .get(watchlistController.findAll)
  .post(watchlistController.create);
// Matches with "/api/books/:id"
router
  .route("/:UserID")
  .get(watchlistController.findById);

router
  .route("/email/:username")
  .get(watchlistController.findByUsername);

module.exports = router;
