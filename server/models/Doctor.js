const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  area: { type: String, required: true },
  image: { type: String, required: true },
  socialLinks: {
    facebook: String,
    instagram: String,
    twitter: String
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
