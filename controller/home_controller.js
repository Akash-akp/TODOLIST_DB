const Task = require('../models/tsk');
module.exports.home = function(req,res){
    Task.find({},function(err,tsk){
        if(err){
            console.log(err);
            return;
        }
        return res.render('home',{
            title: "Home",
            tasks: tsk
        })
    })
}