'use strict';
const app = require('express')();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(port);
console.log('server listening on port: ' + port);
