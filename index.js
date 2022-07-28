const express = require("express");
const routes = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.use("/usuarios", routes);

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
