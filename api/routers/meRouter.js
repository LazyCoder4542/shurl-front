const express = require("express")
const {getLinksByUser} = require("../controllers/linkController")
const { getUserDetails } = require("../controllers/userController")

const meRouter = express.Router()

meRouter.route('/').get(getUserDetails)
meRouter.route("/links").get(getLinksByUser)

module.exports = meRouter