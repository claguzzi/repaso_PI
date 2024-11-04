const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); // Importa el middleware cors
const mainrouter = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Habilita CORS para todas las rutas(modificarlo posteriormente por seguridad)
app.use(cors());   

app.use(mainrouter);

module.exports = app;
