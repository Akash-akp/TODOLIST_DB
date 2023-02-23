const { urlencoded } = require('express');
const express = require('express');
const port = 8000;

// database connect
const db = require("./config/mongoose");
const app = express();

// connect to index.ejs with home.css and home.js
app.use(express.urlencoded());
app.use(express.static('assets'));

// set up view
app.set('view engine','ejs');
app.set('views','./views');

// config routes
app.use('/',require('./routes'));


// calling server
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server :",err);
        return;
    }
    console.log("Server is running on port:",port);
})