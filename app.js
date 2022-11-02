const { response } = require('express');
const express = require('express');
 
// Creating express object
const app = express();
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//init mail api
var nodemailer = require('nodemailer');




 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
    res.end()
})





app.get('/sendMail', (req, res) => {
  const {from,messageBody } = req.query;
 
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ciberteste50@gmail.com',
    pass: 'sntgocevdgybirlb'
  }
});

    var mailOptions = {
        from: 'ciberteste50@gmail.com',
        to: 'ciberteste50@gmail.com',
        subject: from,
        text: messageBody
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.send(400);
        } else {
          console.log('Email sent: ' + info.response);
          res.send(200);
        }
      });
   
})

app.get('/sendMailToDigitalCompany', (req, res) => {
    
    const {from,messageBody } = req.query;
    console.log(req.query);
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'digitalcompany248@gmail.com',
        pass: 'khlqrecdkcjgicmr'
      }
    });
  
      var mailOptions = {
          from: 'digitalcompany248@gmail.com',
          to: 'digitalcompany248@gmail.com',
          subject: from,
          text: messageBody
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            res.send(400);
          } else {
            console.log('Email sent: ' + info.response);
            res.send(200);
          }
        });
     
  })
 
 
// Port Number
const PORT = process.env.PORT || 3000;
 
// Server Setup
app.listen(PORT, ()=>{
    console.log("server started and running on port " + 3000);
});
