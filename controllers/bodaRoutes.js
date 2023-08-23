const express = require("express");
const router = express.Router();

// boda route
router.get("/boda", (req, res) => {
  res.render("boda.pug");
});

module.exports = router;
