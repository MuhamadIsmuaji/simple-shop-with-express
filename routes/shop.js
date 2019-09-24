const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from express</h1>');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;