const router = require("express").Router();
const Stocks = require("../../models/beststocks");
const watchlistController = require("../../controllers/watchlistController");


// router.post("/", watchlistController.insert);

// router.post("/stockstotrade", watchlistController.findAll())

router.route("/")
  .get(watchlistController.findAll)
  .post(watchlistController.create)

router
  .route("/:id")
  .get(watchlistController.findById)
  .put(watchlistController.update)
  .delete(watchlistController.remove);

module.exports = router;
