const express = require("express")
// const userController = require("../controllers/userController")
const { protect } = require("../controllers/authController")
const meRouter = require("./meRouter")

const userRouter = express.Router()


module.exports = userRouter