const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000
app.use(cookieParser());
var cors = require('cors')
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(
    cors({
        origin: "https://fc4f-134-238-18-189.in.ngrok.io",
        credentials: true,
    })
);
app.get('/api', (req, res) => {
    res.cookie('user',"vikram",{sameSite:'none',secure:true});
   // res.cookie('user',"vikram");
    res.send('Hello World!')
    return res;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
