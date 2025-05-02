const logger = (req, res, next) => {
    const method = req.method; // GET, POST, PUT, DELETE
    const url = req.url; // /, /about, /contact
    const time = new Date().getUTCFullYear() // current time
    console.log(`Request Method: ${method}, Request URL: ${url}, Time: ${time}`);
    next(); // call the next middleware or route handler
};

module.exports = logger; // export the logger middleware