
// Models
const { Todo } = require('../models/todo.model');
const { User } = require('../models/user.model');

const initModels = () => {
  // Model realtions de 1 a muchos
User.hasMany(Todo);
Todo.belongsTo(User);
}

module.exports = { initModels }