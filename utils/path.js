const path = require('path');

// dirname(path) => return directory name of the path
// mainModule => refer location to started the application
// process.mainModule.filename => refer to app.js (where file application was spawn up)
module.exports = path.dirname(process.mainModule.filename);