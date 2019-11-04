const router = require('express').Router();

router.use('/addpost', require('./articles'));

module.exports = router;