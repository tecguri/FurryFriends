const express = require("express");
const {userRegister, userLogin, findUser, getUsers} = require("../Controllers/userController");


const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/find/:userId", findUser);
router.get("/getusers", getUsers);

module.exports = router;