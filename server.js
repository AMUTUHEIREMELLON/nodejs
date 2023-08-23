const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const passport = require("passport");
const connectdb = require("./config/dbConfig");
const port = process.env.PORT || 3000;

const app = express();

const Signup = require("./models/userModel");
const bodaRoutes = require("./controllers/bodaRoutes");
const helloRoutes = require("./controllers/helloRoutes");
const employeeRoutes = require("./controllers/employeeRoutes");
const userRoutes = require("./controllers/userRoutes");
const dashRoutes = require("./controllers/dashRoutes");

// this is importing the express session
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUnitialised: false,
});
// const session = expressSession({})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectdb();

// setting up pug as our view engine
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());

// setting up directory for static files
app.use(express.static(path.join(__dirname, "public")));

// using imported routes
app.use("/api", helloRoutes);
app.use("/api", bodaRoutes);
// app.use("/api", homeRoutes);
app.use("/api", employeeRoutes);
app.use("/api", userRoutes);
app.use("/api", dashRoutes);
// running the server on a spefic port
// this should be the last line in the server line
app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
