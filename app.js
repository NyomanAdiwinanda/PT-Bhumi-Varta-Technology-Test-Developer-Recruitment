const express = require('express');
const routes = require('./routes/index.js');

const app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
