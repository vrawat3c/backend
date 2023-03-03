const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000
app.use(cookieParser());
var session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: "auto",sameSite:'none'}
  }))
var cors = require('cors')
app.use(
    cors({
        origin: "https://fc4f-134-238-18-189.in.ngrok.io",
        credentials: true,
    })
);
app.get('/api', (req, res) => {
    res.cookie('user',"vikram",{sameSite:'none',secure:true});
   // res.cookie('user',"vikram");
   (req.session.views)? req.session.views = 1: req.session.views++;
   req.session.save();
    // res.end('welcome to the session demo. refresh!')
    res.send('Hello World!')
    return res;
})

app.get('/get-cookie', (req, res) => {
   // res.cookie('user',"vikram");
    res.send(req.session.views);
    return res;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
