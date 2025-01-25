const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const todoRoute = require('./routes/route.todo');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Настроим маршрут для работы с todo
app.use('/api/todo', todoRoute);

// Статические файлы для отображения изображений
app.use('/uploads', express.static(path.join(__dirname, "uploads")));

app.get('/', (req, res) => {
  res.send('hello with api');
});

mongoose.connect("mongodb+srv://tursunarsen20:Hadi2017g@todolistwithphoto.schyv.mongodb.net/?retryWrites=true&w=majority&appName=todolistWithPhoto")
  .then(() => {
    console.log("mongodb connect");
    app.listen(9000, () => {
      console.log("server run 9000");
    });
  })
  .catch(() => {
    console.log("server error");
  });

module.exports = app;

