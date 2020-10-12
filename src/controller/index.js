const router = require('express').Router();
const student = require('./student');

const path = '/';

router.get('', (req, res) => {
  res.json({
    message: 'App ready!'
  });
});

router.use(student.path, student.router);

module.exports = {
  path,
  router
};