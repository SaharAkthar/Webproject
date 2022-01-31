const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Form = require("./models/form.js");
mongoose.connect("mongodb://localhost:27017/complaint", {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "/views"));
app.get("/home", (req, res) => {
  res.render("flannagans/home");
});
app.get("/about", (req, res) => {
  res.render("flannagans/about");
});
app.get("/team", (req, res) => {
  res.render("flannagans/team");
});
app.get("/accounting", (req, res) => {
  res.render("flannagans/accounting");
});
app.get("/forensic", (req, res) => {
  res.render("flannagans/forensic");
});
app.get("/payroll", (req, res) => {
  res.render("flannagans/payroll");
});
app.get("/taxation", (req, res) => {
  res.render("flannagans/taxation");
});
app.get("/business", (req, res) => {
  res.render("flannagans/business");
});
app.get("/charities", (req, res) => {
  res.render("flannagans/charities");
});
app.get("/medical-speciality", (req, res) => {
  res.render("flannagans/medical-speciality");
});
app.get("/retail-and-wholesale", (req, res) => {
  res.render("flannagans/retail-and-wholesale");
});
app.get("/construction-and-property", (req, res) => {
  res.render("flannagans/construction-and-property");
});
app.get("/it-sector", (req, res) => {
  res.render("flannagans/it-sector");
});
app.get("/manufacturing", (req, res) => {
  res.render("flannagans/manufacturing");
});
app.get("/sectorspaciality", (req, res) => {
  res.render("flannagans/sectorspaciality");
});
app.get("/servicespeciality", (req, res) => {
  res.render("flannagans/servicespeciality");
});
app.get("/contact", (req, res) => {
  res.render("flannagans/contact");
});
app.post("/contact", async (req, res) => {
  //if (!req.body.campground) throw new ExpressError("Invalid Campground Data", 400);
  try {
    console.log(req.body.name);
    res.send(req.body.name);
  } catch (err) {
    res.send(err);
  }
});
app.listen(3000, () => {
  console.log("Serving on Port");
});
