const { Router } = require("express");
const { getUsersHandler,deleteUserHandler, getUserHandler, createUserHandler } = require("../handlers/usersHandler");




const usersRouter = Router();




usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getUserHandler);
usersRouter.delete("/:id", deleteUserHandler);
usersRouter.post("/", createUserHandler);



module.exports = usersRouter