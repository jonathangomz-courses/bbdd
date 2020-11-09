const mongoose = require('../service/mongoose');

const StudentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
  }
}, {
  timestamps: true,
});

StudentSchema.methods.concatName = function() {
  return `${this.firstname} ${this.lastname}`;
}

StudentSchema.methods.getUsername = function() {
  return this.email.split('@')[0];
}

StudentSchema.pre('save', function() {
  console.log('pre - save:', this);
});

const student = mongoose.model('students', StudentSchema);

module.exports = student;