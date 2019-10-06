exports.getNotFoundPage = (req, res, next) => {
    // use templating engine
    res.render('404', { pageTitle: 'Page Not Found', pagePath: 'notfound' });
}