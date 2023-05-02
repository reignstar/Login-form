const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');
const useroutes = require('./routes/useroutes');
const nodemailer = require('nodemailer');
const { sid, token } = require('./config');
const accountSid = sid;
const authToken = token;
const client = require('twilio')(accountSid, authToken);
const cors = require("cors");

const random = Math.floor(Math.random() * 9000 + 1000)
const ran = random.toString();




//express app
const app = express();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'faithnyongsn@gmail.com',
    pass: 'gvntbczuvpdiqghd',
  },
});
const mailOptions = {
  from: 'faithnyongsn@gmail.com',
  to: 'fnyongesa@kabarak.ac.ke',
  subject: 'OTP',
  text: ran,
};

app.use(cors());
//connect to mongodb

const dbURI = "mongodb+srv://kiki:kiki23@login.6dnynpx.mongodb.net/?retryWrites=true&w=majority" 
mongoose.connect(dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: false
  })
  .then((result) => {
    console.log('Database connected successfully.........:')
  });

 

//register view engine



//listen for request


//midleware &static files
 //app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(morgan('dev'));

//mongoose and mongo sandbox routes


// app.get('/', (req, res) => {
//   res.render('Login');
// });



// app.get('/create', (req, res) => {
//   res.render('Signup');
// });

app.post('/signup', (req, res) => {

  

  // send email 
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error in sending email  ' + error);
      return true;
    } else {
      console.log('Email sent: ' + info.response);
      return false;
    }
  });

  // send sms
  client.messages
    .create({
      to: '+254707567136',
      from: '+15074073432',
      body: random,
    })
    .then(message => console.log(message.sid));
  console.log(random);

  const email = req.body.email
  const number = req.body.number
  const otp = random
  const user = new User({
    email: email,
    number: number,
    otp: random
  });




  user.save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    })
})

// login end point
app.post('/login', async (req, res) => {
  // const  otp = req.query.otp;
     const otp = req.body.otp
    const email = req.body.email
    const number = req.body.number

    console.log(otp, email, number)

    console.log(otp);
    const user = await User.findOne({email: email })
    if(!user){
      return res.status(400).json({status:"FAILED ",error: "user Not found"})
    }
    if(User.findOne({number: number })){
      res.status(402).json({status:"FAILED", error:"inavlid number"})
    }
    if(await User.findOne({otp: otp })){
    
    if(res.status(201)){
      res.json({ message:"uSER LOGGED SUCCESSFULLY"})
    }else{
      res.json({error:"error"})
    }
  }
  res.status(401).json({status:"FAILED", error:"inavlid pin"})


  

})

app.get('/', async (req, res) => {
  res.send('We are up and running')

})
const port = 4000
app.listen(port, 
  console.log("The server is up and running",)
  )



// `/user/?id=76768888888` -----PARAMS
// `/user/ID = 762E72` -----PARAMS
