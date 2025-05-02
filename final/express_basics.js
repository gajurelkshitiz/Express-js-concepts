const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("<H1> Welcome to the home page</H1>");
});

app.get('/about', (req, res) => {
    res.status(200).send("<H1> Welcome to the about page</H1>");
});

app.all('*', (req, res) => {
    res.status(404).send("<H3> Oops! Page not found</H3>");
})


app.listen(5000, () => {
    console.log('Server is listening on port 3000...');
}
);
