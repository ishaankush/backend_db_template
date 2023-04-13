const express = require("express");
const router = express.Router();
const {getContacts,postContact,updateContact,deleteContact,getContact} = require("../controllers/contactController")

router.route("/").get(getContacts).post(postContact);
router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);

module.exports = router;