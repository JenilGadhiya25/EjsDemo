const express = require("express");
const app = express();
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
app.use(express.static(path.join(__dirname, "./uploads")));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/mydb");
const productSchema = mongoose.Schema({
  name: String,
  file: String,
});

const productModel = mongoose.model("product", productSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});
app.get("/edit/:id", async function (req, res) {
  const id = req.params.id;
  const user = await productModel.findById(req.params.id);
  res.render("editsignup", { user: user });
});
app.post("/edit/:id", async function (req, res) {
  const id = req.params.id;
  upload(req, res, async function (err) {
    if (req.file) {
      var details = {
        name: req.body.name,
        file: req.file.originalname,
      };
      await productModel.findByIdAndUpdate(req.params.id, details);
      console.log("succss");
    } else {
      var details = {
        name: req.body.name,
      };
      await productModel.findByIdAndUpdate(req.params.id, details);
      console.log("succss");
    }
    res.redirect("/users");
  });
});

app.post("/signup", async function (req, res) {
  upload(req, res, async function (err) {
    var details = {
      name: req.body.name,
      file: req.file.originalname,
    };
    await productModel.insertOne(details);
  });
  res.redirect("/users");
});

app.get("/users", async function (req, res) {
  const users = await productModel.find();
  res.render("users", { users: users });
});

app.get("/delete/:id", async function (req, res) {
  const user = await productModel.findById(req.params.id);
  if (user) {
    const filePath = path.join(__dirname, "uploads", user.file);
    fs.unlink(filePath, (err) => {
      if (err) console.error("File deletion error:", err);
    });

    await productModel.findByIdAndDelete(req.params.id);
  }
  res.redirect("/users");
});

app.listen(9000, function () {
  console.log("server is running....");
});
