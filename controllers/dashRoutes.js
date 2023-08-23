const express = require("express");
const router = express.Router()
const { ensureLoggedIn } = require("connect-ensure-login");


router.get("/dashboard", ensureLoggedIn("/api/login"), (req, res) => {
  res.render("dashboard.pug");
});

router.get("/directorDash", ensureLoggedIn("/api/login"), (req, res) => {
  res.render("director.pug");
});

router.get("/managerDash", ensureLoggedIn("/api/login"), (req, res) => {
  req.session.user = req.user;
  const loggedInUser = req.session.user.firstname;
  console.log(loggedInUser);
  res.render("manager.pug", {loggedInUser});
});



module.exports = router