const express = require('express');
const app = express();
const mongoose  = require('mongoose');

app.get('/',(req,res)=> {
    res.send('We are on home page');
});




app.listen(3000);