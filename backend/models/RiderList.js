const mongoose = require('mongoose');

const RiderTrickSchema = new mongoose.Schema({
    trickID : {
        type: String,
        required: [true, "Need trickID"]
    },
    side : {
        type: String,
        required: [true, "Need side"]
    },
    'rotation direction' : {
        type: String,
        required: [true, "Need rotation direction"]
    },
    rotation : {
        type: Number,
        required: [true, "Need rotation"]
    },
    name : {
        type: String,
        required: [true, "Need name"]
    },
    invert : {
        type: String,
        required: [true, "Need invert"]
    },
    edge : {
        type: String,
        required: [true, "Need edge"]
    },
    'Date Landed' : {
        type: Date,
        required: [true, "Need date landed"]
    },
    Comfort : {
        type: Number,
        required: [true, "Need comfort"]
    },
    Notes : {
        type: String,
    },
    user_id : {
        type: String,
        required: [true, "Please login to save tricks"]
    },
    user_name : {
        type: String,
        required: [true, "Please login to save tricks"]
    }
});

module.exports = mongoose.model('RiderTrick', RiderTrickSchema)