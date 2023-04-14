//Get All contacts

const getContact = (req, res) => {
  res.status(200).json({ message: "Get all the contacts" });
};

module.exports = { getContact };
