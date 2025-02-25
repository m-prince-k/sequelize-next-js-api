const express = require("express");
const UserController = require("./controller/usercontroller");
const routes = express.Router();

routes.get("/getUser",UserController.getUsers);
routes.post("/createUser",UserController.createUser);
module.exports=routes;