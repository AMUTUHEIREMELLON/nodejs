const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        unique:true
    },
    telephone:{
        type:String
        },

})

module.exports = mongoose.model("Employee", EmployeeSchema);