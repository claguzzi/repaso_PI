const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postRouter = require("./postRouter");
const emailRouter = require("./emailRouter");


const mainRouter = Router();


mainRouter.use("/user", usersRouter)
mainRouter.use("/posts", postRouter)
mainRouter.use("/email", emailRouter)




module.exports = mainRouter