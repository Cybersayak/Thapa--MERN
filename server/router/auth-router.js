const express = require('express');
const router = express.Router();
//const {home, register} = require("../controllers/auth-controller");
const authcontrollers = require("../controllers/auth-controller");

/*
router.get('/', (req, res) => {
  res
  .status(200)
  .send('MERN THAPA TECHNICAL using router')
 })


router.route("/register").get((req, res) => {
    res.status(200)
    .send('WELCOME TO REGISTRATION PAGE');
});
*/

// router.route("/home").get(home);
router.route("/home").get(authcontrollers.home);

//router.route("/register").get(register);
router.route("/register").post(authcontrollers.register);
module.exports = router;
