const mongoose = require('mongoose');
const tskSchema = new mongoose.Schema({
    about:{
        type: String,
        required: true
    },
    due:{
        type: Date,
        required: true
    },
    category:{
        type: String,
        required: false
    },
})

const Task = mongoose.model('Task',tskSchema);
module.exports = Task;