const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     putting in static folder
//     server side rendering
// });

app.all('*', (req, res) => {
    res.status(404).send('<h3>Resource not found</h3>');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});