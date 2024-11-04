const app = require("./Src/app");
const { sequelize } = require("./Src/db")


app.listen(3001, () => {
  sequelize.sync({ alter: true });
  console.log("escuchando en puerto 3001")
})


