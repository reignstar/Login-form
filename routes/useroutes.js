const express = require('express');

const router = express.Router();

const {  
  isRequestValidated,
  validateSignUpRequest,
  validateSignIpRequest,
} = require("../validation/fileauth");

router.post("/", validateSignIpRequest, isRequestValidated);

router.post("/create", validateSignUpRequest, isRequestValidated);

module.exports = router;