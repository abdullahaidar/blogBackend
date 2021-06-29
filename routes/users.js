var express = require('express');
var router = express.Router();
const { validateInputs } = require('../middleware/validator');
const { userValidationRules } = require('../lib/validation/userRules');


const {
  addUser,
  loginUser
} = require("../controller/usersController");

router
  .route("/")
  .post(validateInputs(userValidationRules), addUser);


// ROUTE FOR LOGIN
router.route("/login").post(loginUser);


module.exports = router;
