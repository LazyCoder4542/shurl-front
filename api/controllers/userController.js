const {Document, Types} = require("mongoose")
const User = require("../model/userModel")
const { nanoid } = require("nanoid")
const validator = require("validator")
const catchAsync = require("../utils/catch-async")
const AppError = require("../utils/app-error")


const getUserDetails = catchAsync(async (req, res) => {
  const user = await User.findById(req.user_id)
  res.status(200).json({
    status: "success",
    data: {
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
    }
  })
})

module.exports = {getUserDetails}