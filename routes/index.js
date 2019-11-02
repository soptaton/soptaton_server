const express = require('express'); 
const router = express.Router();

router.use('/rewards', require('./rewards'));
router.use('/products', require('./products'));
router.use('/users', require('./users'));

console.log('/index.js');
module.exports = router;
