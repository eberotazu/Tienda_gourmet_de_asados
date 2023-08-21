const { Router, json } = require("express");
const publicAccess = require("../middlewares/publicAccess");

const router = Router();

router.get("/signup", publicAccess, (req, res) => {
  res.render("signup.handlebars");
});

router.get("/login", publicAccess, (req, res) => {
  res.render("login.handlebars", { mostrarIconos: false });
});

router.get("/", async (req, res) => {
  res.render("home.handlebars", {
    mostrarIconos: true,
    tengoUsuario: req.user ? true : false,
  });
});

module.exports = router;
