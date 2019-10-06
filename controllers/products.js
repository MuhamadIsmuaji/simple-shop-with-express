const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
    // use templateing engine
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        pagePath: '/admin/add-product',
        activeAddProduct: true,
        formsCSS: true, 
        productCSS: true, 
    });
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({ title: req.body.title });

    // using model
    const product = new Product(req.body.title);
    product.save();

    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            products: products,
            pageTitle: 'Shop',
            pagePath: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}