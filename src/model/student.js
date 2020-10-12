const mongoose = require('../service/mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const student = mongoose.model('students', StudentSchema);

module.exports = student;