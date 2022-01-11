require('dotenv').config();
// const dotenv = require('dotenv');

const { dataBase } = require('./utils/database');
const { app } = require('./app');

// dotenv.config({path: './.env'});

dataBase.sync()
.then( ()=>{
  console.log('Database conected')
  startServer();
})
.catch(err => console.log(err))

//Puerto
// const PORT = 4000;



const startServer = () => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log('Servidor iniciado en puerto ' + PORT);
  })
}