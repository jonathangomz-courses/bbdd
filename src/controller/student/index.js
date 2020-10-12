const Controller = require('./controller');
const router = require('express').Router();

const path = '/students';

router.get('', Controller.get);
router.post('', Controller.save);

module.exports = {
  path,
  router
}