const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  sid:  process.env.TWILIO_ACCOUNT_SID,
  token: process.env.TWILIO_AUTH_TOKEN,
  number: process.env.MY_PHONE_NUMBER
};