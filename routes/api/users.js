const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require("express-validator");
const { User, Picture } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { generateToken } = require("../util/auth");
const {
  jwtConfig: { expiresIn },
} = require("../../config");

const router = express.Router();

const validateSignUp = [
  check("username").exists(),
  check("password").exists(),
]

router.get('/:id', asyncHandler(async function (req, res) {
  const userPhotos = await Picture.findAll( { where: { userId: req.params.id }, include: [{
    model: User
  }]});
  res.json( { userPhotos } )
}))

// Signup route
router.post(
  "/",
  validateSignUp,
  handleValidationErrors,
  asyncHandler(async function (req, res) {
    const user = await User.signup(req.body);

    const token = await generateToken(user);
    res.cookie("token", token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production",
    });
    return res.json({
      user,
    });
  })
);

module.exports = router;
