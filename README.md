# 🚀 Express.js Practice Documentation

This repository contains my learning and practice work while exploring **Express.js**, a minimal and flexible Node.js web application framework. Below is a structured summary of all the core concepts I covered, with short examples and explanations to serve as both a **revision** and a **reference** for others.

---

## 📦 Express Basics

- Express is a lightweight web framework for Node.js that simplifies handling HTTP requests and building APIs.
- Basic setup:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

app.listen(5000, () => console.log('Server running on port 5000'));
```


###  Static Files
Use `express.static()` to serve static files like HTML, CSS, JS from a folder.

```js
app.use(express.static('./public'));
```

### API vs SSR
- **API**: Returns JSON data (backend only).

- **SSR (Server-Side Rendering)**: Returns HTML views generated on the server.

### JSON Basics
- You can send and receive JSON using Express:

```js
app.get('/api/data', (req, res) => {
  res.json({ name: 'Kshitiz', role: 'Learner' });
});
```

### Params & Query Strings
#### Route Params
Used to get dynamic values from the URL.

```js
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User ID is ${id}`);
});
```

#### Query Strings
Used for filtering or additional info.

```js
app.get('/search', (req, res) => {
  const { term } = req.query;
  res.send(`Searching for ${term}`);
});
```

### Middleware
- Functions that execute during the request/response cycle.

- They can modify the `req` or `res` objects or end the cycle.

```js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
```

#### Multiple Middlewares
You can chain multiple middlewares:

```js
app.use([logger, anotherMiddleware]);
```

### HTTP Methods
#### GET
Retrieve data:

```js
app.get('/items', (req, res) => {
  res.send('List of items');
});
```

#### POST
Send data to server:

```js
app.post('/items', (req, res) => {
  const item = req.body;
  res.send(`Item received: ${item.name}`);
});
```
> For parsing form data: `app.use(express.urlencoded({ extended: false }))`

> For JSON: `app.use(express.json())`

#### PUT
Update existing resource:

```js
app.put('/items/:id', (req, res) => {
  res.send(`Updating item with ID ${req.params.id}`);
});
```

#### DELETE
Remove a resource:

```js
app.delete('/items/:id', (req, res) => {
  res.send(`Deleting item with ID ${req.params.id}`);
});
```

### Using Postman
- Used Postman to test various HTTP methods and APIs locally.

- Very helpful for simulating client-side behavior.


### Express Router
Modularize routes into separate files for cleaner code.

#### Router Setup
```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Router Home');
});

module.exports = router;
```

#### Using in Main File
```js
const router = require('./routes/router');
app.use('/api', router);
```


### Controllers
Separate logic from route definitions:

```js
// controller.js
const getHome = (req, res) => res.send('Home Controller');
module.exports = { getHome };

// router.js
const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/controller');

router.get('/', getHome);
```