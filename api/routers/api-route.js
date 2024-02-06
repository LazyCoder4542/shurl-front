const express = require("express");
const AppError = require("../utils/app-error");

const authRouter = require("./authRouter");
const linkRouter = require("./linkRouter");
const userRouter = require("./userRouter");
const meRouter = require("./meRouter");

const {protect} = require('../controllers/authController');
const catchAsync = require("../utils/catch-async");
const mongoose = require("mongoose");

const apiRouter = express.Router()

apiRouter.route('/').get((req, res) => {
    res.status(200).send("Hello")
})
apiRouter.use("/me", protect, meRouter)
apiRouter.use('/auth', authRouter)
apiRouter.use('/links', protect, linkRouter)
apiRouter.use('/users', userRouter)
apiRouter.use('/uptime', require('express-healthcheck')({
    healthy: function () {
        return {
            state: "up", 
            dbState: mongoose.STATES[mongoose.connection.readyState] 
        }
    }
}))

apiRouter.all("*", (req, res, next) => {
    next(new AppError(`No route for ${req.method} | '${req.url}'`, 404))
})
module.exports = apiRouter