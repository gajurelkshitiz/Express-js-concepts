const express = require('express');
const app = express();
const logger = require('./logger'); // import the logger middleware 
const authorize = require('./authorize'); // import the authorize middleware
const morgan = require('morgan');


// req ==> middleware ==> res

// app.use('/api', logger); // use the logger middleware

// app.use([ logger , authorize ]); // use both authorize and logger middleware


// 1. use vs route
// 2. options = our own/ express options/ third party options

// Examples:
// 1. app.use([logger, authorize]);
// 2. app.use(express.static('./public'));


app.use(morgan('tiny')); // use morgan middleware for logging requests
app.get('/', (req, res) => {

    res.send('Welcome to Homepage');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/api/products', (req, res) => {
    res.send('Products List');
});

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items List');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
