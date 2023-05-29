const asyncHandler = require("express-async-handler"); //works in place of try{}catch()

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body, "is req.body");
  const { name, emaiil, phone } = req.body;
  if (!name || !emaiil || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create Contacts" });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req?.params?.id}` });
});

//@desc Update contact
//@route UPDATE /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req?.params?.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req?.params?.id}` });
});
module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
