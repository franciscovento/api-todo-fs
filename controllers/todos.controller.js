const { Todo } = require('../models/todo.model');
const { AppError } = require('../utils/appError');

// Utils
const  { catchAsync } = require('../utils/catchAsync')

exports.getAllTodos = catchAsync( async (req, res, next) => {
  // ! SELECT * FROM todos
  const todos = await Todo.findAll();

  res.status(200).json({
    status: 'success', 
    data: { todos }
  });

})

exports.createTodo = catchAsync( async (req, res, next) => {
  // Get todo content from req.body
  const { content } = req.body

  // ! INSERT INTO todos (content) VALUES ('Hello') 
  const newTodo = await Todo.create({ content })
  res.status(201).json( { status: 'success', data: {newTodo} })


})

exports.updateTodo = catchAsync ( async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;

  // Find ToDo with the given ID
  // SELECT * FROM todos WHERE id = id
  const todoExist = await Todo.findOne({where: { id } });

  if( !todoExist ){
    // const errorTodo =  new AppError('To Do does not exists', 404);
    // res.status(errorTodo.statusCode).json({ status: errorTodo.status, message: errorTodo.message, stack: errorTodo.stack })

    return next(new AppError('ToDo does not exists', 404))
    
  }
    // ! UPDATE todos SET content = 'fadsa' WHERE id = 'id'
    // const todoUpdate = await Todo.update({ content }, { where: { id }})
    // ! opcion 1
    // await Todo.update({ content }, { where: { id }})
    // ! opcion 2
    await todoExist.update({ content })
    res.status(201).json({ status: 'success', message: 'The todo was edited' })
 

})

exports.deleteTodo = catchAsync( async (req, res , next) => {
  const { id } = req.params;

  const todoExist = await Todo.findOne({where: { id }});

  if (!todoExist) {
    return next(new AppError (`Can't delete ToDo because it doesn't exist`, 404 ))
  }

  // DELETE from todo WHERE id = id
  // await Todo.destroy({ 
  //   where: {
  //     id: id
  //   } })

  todoExist.destroy();
  res.status(204).json({status: 'succes'});

})

exports.getTodoById = catchAsync( async ( req, res, next ) => {
  const { id } = req.params;
    
    // ! SELECT * FROM todos WHERE id = id
    const todoById = await Todo.findOne({ where: { id } })
  if (!todoById) {
    return next(new AppError(`Request falied, that id doesn't exist`, 404))
  }

    res.status(200).json({status: "success", todo: { todoById }});

})