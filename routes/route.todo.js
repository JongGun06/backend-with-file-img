const express = require('express');
const upload = require('../middleware/upload'); // Импортируем middleware
const router = express.Router();
const { getTodo, createTodo, deleteTodo, updateTodo } = require('../controllers/todo.cotroller.js'); 

// Эндпоинт для получения списка всех todo
router.get('/', getTodo);

// Эндпоинт для создания нового todo с загрузкой изображения
router.post('/', upload.single('image'), createTodo);  // Здесь обрабатываем файл

// Эндпоинт для удаления todo по ID
router.delete('/:id', deleteTodo);

// Эндпоинт для обновления todo с загрузкой нового изображения
router.put('/:id', upload.single('image'), updateTodo);  // Здесь также обрабатываем файл

module.exports = router;
