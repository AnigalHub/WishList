// Маршрут
const api = require("express").Router()
// Промежуточные обработчики
const { asyncHandler, errorCatcher } = require("../middlewares")
// База
const db = require("./../db")

//Добавить в базу
api.get('/users', asyncHandler(async (req, res) => {
    const result = await db.query('SELECT * FROM users')
    console.log(result)
    res.end("test")
}))


// Обработчик ошибок
api.use(errorCatcher)
module.exports = api