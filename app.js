const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const PostSchema = require('./models/Post');
const cors = require('cors');

// MIDDLEWARES
app.use(cors());

// BODY PARSER
app.use(bodyParser.json());

// ROUTES
const getRoute = require('./routes/get');
const postsRoute = require('./routes/posts');
const putRoute = require('./routes/put');
const deleteRoute = require('./routes/delete');

app.use('/get', getRoute);
app.use('/posts', postsRoute);
app.use('/put', putRoute);
app.use('/delete', deleteRoute);

app.use('/', (req, res) => {
  res.send('We are on home');
});

//  CONNECT DATABASE
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to DB!');
  }
);

// listening to the server
app.listen(5505, () => {
  console.log('Ready on PORT: 5505');
});
