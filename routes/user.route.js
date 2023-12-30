const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users.controller");
const verifyToken = require("../middlewares/verifyToken");
const multer = require("multer");
// const appError = require("../utils/appError");
const userRoles = require("../utils/userRoles");
const allowedTo = require("../middlewares/allowedTo");



// router.route("/").get(verifyToken, allowedTo(userRoles.ADMIN), userContoller.getAllUsers);

router.route("/register").post(userContoller.register);

router.route("/login").post(userContoller.login);

module.exports = router;
