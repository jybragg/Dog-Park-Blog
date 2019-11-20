// const router = require('express').Router();

// router.use('/addpost', require('./articles'));

// module.exports = router;
//===========================================================

const router = require('express').Router();

router.use('/articles', require('./articles'));

module.exports = router;