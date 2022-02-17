const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 3000;

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`)
})