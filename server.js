const express = require("express");
const path = require("path");
const app = express();

// importing helloRoutes .
const helloRoutes = require("./controllers/helloRoutes");

// setting up pug as our view engine
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


// setting up directory for static files
app.use(express.static(path.join(__dirname, "public")));


// using imported routes
app.use("/api", helloRoutes);

// running the server on a spefic port
// this should be the last line in the server line
app.listen(3000, () => console.log("listening on port 3000"));
