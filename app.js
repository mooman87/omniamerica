//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Our vision is as robust and varied as our experience. OmniAmerica is more than a startup. We're your friends and neighbors. Our passion for what we do is only matched by our passion for improving our community, and indeed, we find the two are deeply intertwined. That's what makes our mission statement so impactful: Making Dreams a Reality by Innovating the Future. ";



const app = express();

let msgSubject = [];
let msgBody = [];

let d = new Date();
let n = d.getFullYear();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

let posts = [];

app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
    });
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res) {

res.render("contact");
});



app.post("/contact", function(req, res) {
  const msg = {
    subject: req.body.msgSubject,
    content: req.body.msgBody
  };

  msgSubject.push(msg);
  msgBody.push(msg);
  console.log(msg);

  res.redirect("/");

});




app.listen(3000, function() {
  console.log("I'm up and running, Jeremy.");
});