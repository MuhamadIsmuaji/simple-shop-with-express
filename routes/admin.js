const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

const products = [];

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Submit</button></form>')
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

    // use templateing engine
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        pagePath: '/admin/add-product',
        activeAddProduct: true,
        formsCSS: true, 
        productCSS: true, 
    });
});

router.post('/add-product', (req, res, next) => {
    // console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;