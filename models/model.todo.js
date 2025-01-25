let mongoose = require('mongoose')

let todoSchema = mongoose.Schema({
    val: {type: String, required: true},
    imagePath: {type: String}
})

let Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo