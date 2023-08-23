const express = require("express");
const Employee = require("../models/employeeModel");
const router = express.Router();
const { ensureLoggedIn }= require("connect-ensure-login");


router.get("/employeeform", (req, res) => {
  req.session.user = req.user;
  if(req.session.user.role === "director" || req.session.user.role === "manager"){
    
  
  res.render("employee.pug")
}else{
  res.render("landing.pug", {alert: "Access denied"})
}
});

router.post("/regemployee", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.redirect("/api/employeeform");
    console.log(req.body);
  } catch (error) {
    res.status(400).render("employee");
    console.log(error);
  }
});

router.get("/list", async (req, res) => {
  try {
    let items = await Employee.find();
    let ages = await Employee.aggregate([
      {"$group": {_id: "$all",
      totalAge: {$sum: "$age"},
    }}
    
  ]);

     //let ages =group{totalAge{sum}}
    res.render("employeelist.pug", { employees: items, empAges: ages[0].totalAge});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Sorry could not get employees" });
  }
});

router.post("/employee/delete", async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.body.id });
    res.redirect("/back");
  } catch (error) {
    res.status(400).send("Unable to delete item from the database");
  }
});

//    how to update data
router.get("/employee/edit/:id", async (req, res) => {
  try {
    const emp = await Employee.findOne({
      _id: req.params.id,
    });
    res.render("editemployee", {employee: emp});
  } catch (error) {
    res.status(400).send("Couldn't find employee in database");
    console.log(error);
  }
});

router.post("/employee/edit",ensureLoggedIn ("/api/login"), async (req, res) => {
  try{
    res.session.user = req.user;
    if(req.session.user.role === "director" || req.session.user.role === "manager"){
    await Employee.findOneAndUpdate({_id: req.query.id},req.body);
    res.redirect("/api/list")
  }else{
    res.render("landing.pug", {alert: "You are not authorized to access this page."});
  }
}
  catch(error){
    res.status(400).send("Could not find employee data");
    console.log(error);
  }
});

module.exports = router;
