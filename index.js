const { urlencoded } = require('express');
const express = require('express');
const port = 8000;

const db = require("./config/mongoose");

const app = express();

app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("Error in running the server :",err);
        return;
    }
    console.log("Server is running on port:",port);
})