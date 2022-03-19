// Маршрут
const api = require("express").Router()
// Промежуточные обработчики
const { asyncHandler, errorCatcher } = require("../middlewares")
// База
const db = require("./../db")

const wishlistsRepo = require("../repositories/WishlistsRepo.js")

let wishlist = new wishlistsRepo(db)

//Вывести таблицу
api.get('/users', asyncHandler(async (req, res) => {
    const result = await db.query('SELECT * FROM users')
    console.log(result)
    res.end("test")
}))

api.get('/wishlist', asyncHandler(async (req, res) => {
    //const result = await db.query('select wishlist.title, wish.text FROM wishlist INNER JOIN wish ON wishlist.id=wish.idWishlist')
    //console.log(result.rows)

}))
api.get('/wish', asyncHandler(async (req, res) => {
    const data = req.body
    const result = await db.query('SELECT * FROM wish')
  //  console.log(result)
    console.log(req)
    res.end("test")
}))

api.post('/addUsers', asyncHandler(async (req, res) => {
    const data = req.body
    const result = await db.query('INSERT INTO users (loginUser,passwordUser) values ($1,$2)',[data.loginUser,data.passwordUser])
    console.log(result)
    res.end("test")
}))

// Обработчик ошибок
api.use(errorCatcher)
module.exports = api