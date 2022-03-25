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
    await db.query('DELETE FROM wishlist WHERE wishlist.id = ($1) RETURNING *;',[req.body.id])
    for (let j=0;j<req.body.wishItems.length;j++){
        console.log(req.body.wishItems[j].id)
        await db.query('DELETE FROM wish WHERE wish.id = ($1) RETURNING *;',[req.body.wishItems[j].id])
    }
   res.end()
}))

api.post('/deleteWishItem', asyncHandler(async (req, res) => {
    await db.query('DELETE FROM wish WHERE wish.id = ($1) RETURNING *;',[req.body.id])
    res.end()
}))
// Обработчик ошибок
api.use(errorCatcher)
module.exports = api