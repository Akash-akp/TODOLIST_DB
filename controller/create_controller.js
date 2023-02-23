const Task = require("../models/tsk");
module.exports.create = function(req,res){
    Task.create({
        about: req.body.des,
        due: req.body.due,
        category: req.body.category,
    },function(err,newTask){
        if(err){
            console.log(err,'error in creating new task');
            return;
        }
        console.log("****",newTask);
        return res.redirect('back');
    })
};

const {ObjectId} = require('mongodb');
// const {Array} = require('mongodb');

module.exports.destroy = function(req,res){
    let n = req.body.key.length;
    if(Array.isArray(req.body.key)){
        for(let i=0;i<n;i++){
            Task.findByIdAndDelete(ObjectId(req.body.key[i]),function(err,docs){
                if(err){
                    console.log(err);
                }else{
                    console.log("Deleted : ",docs);
                }
            });
            console.log(req.body.key[i]);
        }
    }else{
        Task.findByIdAndDelete(ObjectId(req.body.key),function(err,docs){
            if(err){
                console.log(err);
            }else{
                console.log("Deleted : ",docs);
            }
        });      
    }
    console.log(req.body)
    console.log('more than one element : ',Array.isArray(req.body.key));
    return res.redirect('back');
}