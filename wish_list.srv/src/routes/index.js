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
   await wishlistRepo.AddWishlist(req.body)
    res.end()
}))

api.post('/deleteWishlist', asyncHandler(async (req, res) => {
    await wishlistRepo.DeleteWishlist(req.body)
   res.end()
}))

api.post('/deleteWishItem', asyncHandler(async (req, res) => {
 await wishlistRepo.DeleteWishItem(req.body)
    res.end()
}))
// Обработчик ошибок
api.use(errorCatcher)
module.exports = api