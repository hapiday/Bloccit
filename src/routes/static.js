const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);


router.get("/marco", (req, res, next) => {
  res.send("Polo");
});

router.get("/about", (req, res, next) => {
  res.send("About us");
}
module.exports = router;
