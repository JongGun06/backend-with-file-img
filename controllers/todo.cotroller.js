const Todo = require('../models/model.todo.js');
const cloudinary = require('cloudinary').v2;

async function createTodo(req, res) {
  try {
    const { val } = req.body;
    const imagePath = req.file ? req.file.path : null;  // URL изображения от Cloudinary

    const message = await Todo.create({
      val,
      imagePath,  // Сохраняем URL изображения в базу данных
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ mess: error });
  }
}

async function getTodo(req, res) {
  try {
    const message = await Todo.find({});
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ mess: error });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    const message = await Todo.findByIdAndDelete(id);
    if (!message) {
      return res.status(404).json('not found');
    }
    res.status(200).json({ mess: 'deleted' });
  } catch (error) {
    res.status(500).json({ mess: error });
  }
}

async function updateTodo(req, res) {
  try {
    const { val } = req.body;
    const { id } = req.params;
    const imagePath = req.file ? req.file.path : null;

    const updateTodos = { val };
    if (imagePath) {
      updateTodos.imagePath = imagePath;  // Обновляем URL изображения в базе данных
    }

    const message = await Todo.findByIdAndUpdate(id, updateTodos);
    if (!message) {
      return res.status(404).json('not found');
    }

    const updatedTodo = await Todo.findById(id);
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ mess: error });
  }
}

module.exports = { getTodo, createTodo, deleteTodo, updateTodo };
