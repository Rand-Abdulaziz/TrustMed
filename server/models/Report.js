
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    senderEmail: String,
    receiverEmail: String,
    message: String,
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
