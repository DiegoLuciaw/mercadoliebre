const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo en puerto 3000");
  });

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.post("/login", (req, res) => {
  console.log("Ingresaste correctamente!");
  res.redirect("/");
});

app.post("/register", (req, res) => {
  console.log("Te registraste correctamente!");
  res.redirect("/");
})