const express = require("express");

const router = express.Router();

const {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateHandler");

router.use(validateToken); //implementing protected routes
//combined the routes because they are common
router.route("/").get(getContacts).post(createContact);
//Same as ;
// router.route("/").get(getContacts);
// router.route("/").post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
//Same as ;

// router.route("/:id").get(getContact);
// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);

module.exports = router;
