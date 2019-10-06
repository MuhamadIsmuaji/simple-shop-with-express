const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

// use pug templating engine
// app.set('view engine', 'pug');

// use handlebars templating engine
// handlebars is not built in on express, so we must set engine first
// app.engine('handlebars', expressHbs());
// app.set('view engine', 'handlebars');

// or we can use like on code below (effect on view file extension)
// on handlebars view engine cannot read the logic, so the logic keep on express(js) code only
// app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
// app.set('view engine', 'hbs');

// use ejs templating engine
app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));    
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRouter);
app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

    // use templating engine
    res.render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);