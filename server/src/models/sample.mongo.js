const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Sample', sampleSchema);
