const mongoose = require('mongoose');

const AwaitingDocSchema = new mongoose.Schema({
    patientId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    programmeLevel:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    nurseDate: {
        type: Date,
        default: Date.now()
    },
    indexNo:{
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
    bloodPressure: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true,
    }
    
});

const AwaitingDoc = mongoose.model('Awaiting', AwaitingDocSchema);

module.exports = AwaitingDoc;