const asyncHandler = require("express-async-handler");

//Get All contacts
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all the contacts" });
});

//Create contact
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create contacts" });
});

//Update contact
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Edit contact for ${req.params.id}` });
});

//Update contact
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Edit contact for ${req.params.id}` });
});

//Delete contact
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
