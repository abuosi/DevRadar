const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://elviseamongodb:YTybZgR0sNL9Rdl4@cluster0-8jdr5.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333);

