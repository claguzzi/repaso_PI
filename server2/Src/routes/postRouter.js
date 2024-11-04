const { Router } = require("express");
const { getPostHandler, createPostHandler } = require("../handlers/postHandler");


const postRouter = Router();


postRouter.get("/",getPostHandler)
postRouter.post("/",createPostHandler )


module.exports = postRouter