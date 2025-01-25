let  express = require('express')
let upload = require('../middleware/upload.js')
let router = express.Router()
let {getTodo,createTodo,deleteTodo,updateTodo} = require('../controllers/todo.cotroller.js')

router.get('/', getTodo)
router.post('/', upload.single('image'), createTodo)
router.delete('/:id', deleteTodo)
router.put('/:id', upload.single('image'), updateTodo)

module.exports = router