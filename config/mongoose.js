const mongoose = require('mongoose');

async function main(){
    mongoose.connect('mongodb://localhost:27017/todolist');
}

main().catch(err=>console.log("error"));

const db = mongoose.connection;

db.on('error',console.error.bind(console,"error connectin to the database"));

db.once('open',function(){
    console.log('Successfully connected to the database');
});