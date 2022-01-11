const express = require('express');

// Controller
const {getAllTodos, createTodo, updateTodo, deleteTodo, getTodoById} = require('../controllers/todos.controller');

const router = express.Router();

// !Dummie Data - Test Only
// const todos = [
//   {id: 1, content: "Learn NodeJs"}, {id: 2, content: "Learn React"}, {id: 3, content: "Learn mySQL"}
// ]


router.route('/')
  .get(getAllTodos)
  .post(createTodo)

router.route('/:id')
  .patch(updateTodo)
  .delete(deleteTodo)
  .get(getTodoById)

// Fetch all todos
// router.get('/', getAllTodos );

// Create new todo
// router.post('/', createTodo );

// Update todo
// router.patch('/:id', updateTodo );

// Delete todo
// router.delete('/:id', deleteTodo );

// Pueden usar cualquiera de las dos formas
// module.exports = router
//exports.todosRouter = router;

module.exports = {
  todosRouter: router
}