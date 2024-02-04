// import express from 'express';
const express = require('express');
const cors = require('cors');
const session = require('express-session')
const bp = require('body-parser')
const router = require('./Route/router')

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended:false}))

const corsop = {
    origin:'*',
    Credential : true,
    optionSuccessStatus:200
}

app.use(cors())
app.use('/',router)


// app.use(
//     session({
//         secret: 'your-secret-key', // Change this to a secure key
//         resave: false,
//         saveUninitialized: true,
//         cookie: { secure: false }, // Change to true in production for HTTPS
//       })
// )

app.get('/apidata', (req, res) => {
    res.send('Listening..!');
});

app.listen(4000, () => {
    console.log('Server is ready..!');
});
