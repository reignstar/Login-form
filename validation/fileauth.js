const { check, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");


const validateSignUpRequest = [
check("email").isEmail().withMessage("Valid Email required"),
check("otp")
   .isLength({ min: 4 })
   .withMessage("Pin must be at least 4 character long"),
];
const validateSignIpRequest = [
check("email").isEmail().withMessage("Valid Email required"),
check("otp")
    .isLength({ min: 4})
    .withMessage("Pin must be at least 4 character long"),
]
const isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
 
  if (errors.array().length > 0) {
      return res
              .status(StatusCodes.BAD_REQUEST)
              .json({ error: errors.array()[0].msg });
  }
  next();
};
module.exports = {
  validateSignUpRequest,
  isRequestValidated,
  validateSignIpRequest,
};