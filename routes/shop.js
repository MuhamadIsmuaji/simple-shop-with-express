const path = require('path');
const express = require('express');
const router = express.Router();
// const path = require('path');
// const rootDir = require('../utils/path');
const productsController = require('../controllers/products');

// const adminData = require('../routes/admin');
// router.get('/', (req, res, next) => {
//     // res.send('<h1>Hello from express</h1>');
//     // console.log(adminData.products);
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

//     // use templating engine
//     res.render('shop', { 
//         pageTitle: 'My Shop', 
//         pagePath: '/', 
//         products: adminData.products,
//         hasProducts: adminData.products.length > 0,
//         activeShop: true,
//         productCSS: true, 
//     });
// });

// using controller
router.get('/', productsController.getProducts);

module.exports = router;