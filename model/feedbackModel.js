const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name']
    },
    phone: {
        type: String,
        required: [true, 'Please enter phone']
    }
})

module.exports = mongoose.model('Feedback', feedbackSchema)