var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Jim",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Michael",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res) {
  res.render("form", { title: "Mini Message Board" });
});

router.post("/new", function (req, res) {
  let data = req.body;
  let messageText = data.content;
  let messageUser = data.author;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

module.exports = router;
