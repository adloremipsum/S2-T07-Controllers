const express = require("express");
const router = express.Router();
const userController = require("./controllers/usersController");

router.get("/", userController.getUsers);
router.get("/crear", userController.createForm);

module.exports = router;
