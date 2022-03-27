// Маршрут
const api = require("express").Router()
// Промежуточные обработчики
const { asyncHandler, errorCatcher } = require("../middlewares")
// База
const db = require("./../db")

const wishlistsRepo = require("../repositories/WishlistsRepo.js")

let wishlistRepo = new wishlistsRepo(db)

const Wishlist = require("../models/Wishlist")

//Вывести таблицу
api.get('/allWishlists', asyncHandler(async (req, res) => {
    const result = await wishlistRepo.GetAllWishlists()
    res.json(result)
}))

api.post('/addWishlist', asyncHandler(async (req, res) => {
    const wishlist = new Wishlist()
    wishlist.readFromBody(req.body)
    await wishlistRepo.AddWishlist(wishlist)
    console.log(wishlist)
    res.end()
}))

api.post('/deleteWishlist', asyncHandler(async (req, res) => {
    await wishlistRepo.DeleteWishlist(req.body)
   res.end()
}))

api.post('/deleteWishItem', asyncHandler(async (req, res) => {
 await wishlistRepo.DeleteWishItem(req.body.wishesToDelete)
    res.end()
}))
// Обработчик ошибок
api.use(errorCatcher)
module.exports = api