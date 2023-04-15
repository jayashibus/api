const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const token = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Get All contacts
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Passwodd", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("Users", user);
  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }

  res.json({ message: "Register the user" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.json({ message: "Login the user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current  the user" });
});

module.exports = { registerUser, loginUser, currentUser };
