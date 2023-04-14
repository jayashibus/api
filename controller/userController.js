const asyncHandler = require("express-async-handler");

//Get All contacts
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current  the user" });
});

module.exports = { registerUser, loginUser, currentUser };
