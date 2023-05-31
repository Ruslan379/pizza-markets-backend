const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()
require("colors");


// const authRouter = require('./routes/api/marketsRouter.js'); 
// const contactsRouter = require('./routes/api/contactsRouter.js');



//----------------------------------------------------------------
const app = express()

//! +++++++++++++++++++++++ Нужно для локальной работы (НЕ УДАЛЯТЬ) +++++++++++++++++++++++
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.use(logger(formatsLogger))
//! ________________________ Нужно для локальной работы (НЕ УДАЛЯТЬ) ________________________


// app.use(logger("dev")) //! нужно для деплоя на Render (НЕ УДАЛЯТЬ)
app.use(cors())
app.use(express.json())
app.use(express.static("public")); //! Чтобы Express мог раздавать статические файлы из папки "/public"


//!++++++++++++++++++++++++++ static ++++++++++++++++++++++++++++++
// const FILE_DIR = path.resolve("./public/output")
app.use("/public", express.static("public")); //! мой
//!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// app.use('/api/markets', marketsRouter); 
// app.use('/api/contacts', contactsRouter);



app.use((req, res) => {
  console.log("!!! ОШИБКА !!!:".bgRed.white) //!
  console.log('Такой маршрут не найден...'.bgYellow.red) //!
  res.status(404).json({ message: 'Route not found' })
})


app.use((err, req, res, next) => {
  const { status = 500, message = "Server ERROR" } = err;
  //! ===========================console============================
  console.log("!!! ОШИБКА !!!:".bgRed.white);
  console.error(err.message.red);
  console.log("");
  //! ==============================================================
  res.status(status).json({ message: err.message });
})


module.exports = app
