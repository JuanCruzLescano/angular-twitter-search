const router = require('express').Router();
const history = require('./history');
const twitter = require('./twitter');

router.use('/history', history);
router.use('/twitter', twitter)

module.exports = router