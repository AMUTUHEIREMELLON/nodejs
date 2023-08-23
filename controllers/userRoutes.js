const express = require("express");
const Signup = require("../models/userModel");
const passport = require("passport");
const router = express.Router();

// const userModel = require('../models/userModel');

router.get("/signup", (req, res) => {
  res.render("user.pug");
});

router.post("/register", async (req, res) => {
  try {
    const user = new Signup(req.body);
    console.log(req.body);
    await Signup.register(user, req.body.password);
    res.redirect("/api/signup");
  } catch (error) {
    res.status(400).send({ message: "Failed to register user" });
    console.log(error);
  }
});


// login routes
router.get("/login", (req, res) => {
  res.render("login.pug");
});
router.post("/login", passport.authenticate("local", 
{faiureRedirect:"/api/login",}),
(req,res) => {
  req.session.user = req.user
  let loggedInUser = req.session.user.firstname
  console.log(loggedInUser)
  if(req.session.user.role === "director"){
    res.render("director_.pug")
  }
  if(req.session.user.role === "manager"){
    res.render("manager_.pug", {loggedInUser})
  }
  if(req.session.user.role === "salesagent"){
    res.render("salesagent_.pug")
  }
});


router.get("/logout", (req, res) => {
  req.session.destroy(()=>{res.redirect("/api/login")});
  console.log("You have logged out");
});

module.exports = router;
