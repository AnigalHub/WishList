// Маршрут
const api = require("express").Router()
// Промежуточные обработчики
const { asyncHandler, errorCatcher } = require("../middlewares")
// База
const db = require("./../db")

const wishlistsRepo = require("../repositories/WishlistsRepo.js")

let wishlistRepo = new wishlistsRepo(db)

//Вывести таблицу
api.get('/wishlist', asyncHandler(async (req, res) => {
    const result = await wishlistRepo.GetAllWishlists()
    res.json(result)
}))

api.post('/addWishlist', asyncHandler(async (req, res) => {
    console.log(req.body)
    const result = await db.query('INSERT INTO wishlist (title) values ($1) RETURNING *;',[req.body.title])
    const wishlistId = result.rows[0].id
    for (const x of req.body.wishItems) {
       await db.query('INSERT INTO wish (text,idwishlist,img) values ($1,$2,$3) RETURNING *;',[x.text,wishlistId,x.img])
    }
    res.end()
}))

api.post('/deleteWishlist', asyncHandler(async (req, res) => {
    console.log(req.body)
    const result = await db.query('DELETE FROM wishlist WHERE wishlist.id = ($1) RETURNING *;',[req.body.id])
    console.log(result.rows)
    res.end()
}))

// Обработчик ошибок
api.use(errorCatcher)
module.exports = api