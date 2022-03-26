const Wishlist = require("../models/Wishlist")
const WishItem = require("../models/Wishitem")

class WishlistsRepo {
    constructor(db) {
        this.db = db
    }

    async GetAllWishlists(){
        // 1. получить все wishlists
        const wishlists = (await this.db.query('select * FROM wishlist')).rows
        // 2. получить все wishitems
        let result = []
        for(let i=0; i<wishlists.length;i++){
            let wishlist = new Wishlist()
            wishlist.read(wishlists[i])
            result.push(wishlist)
            const wishItem = (await this.db.query('select * FROM wish where idWishlist = $1',[wishlist.id])).rows
            for (let j=0;j<wishItem.length;j++){
                let wish = new WishItem()
                wish.read(wishItem[j])
                wishlist.wishItems.push(wish)
            }
        }
        // 3. соединить wishlist с его wishItems
        return result
    }
    async AddWishlist(reqBody){
        const addToWishlist = await this.db.query('INSERT INTO wishlist (title) values ($1) RETURNING *;',[reqBody.title])
        const wishlistId = addToWishlist.rows[0].id
        for (const x of reqBody.wishItems) {
            await this.db.query('INSERT INTO wish (text,idwishlist,img) values ($1,$2,$3) RETURNING *;',[x.text,wishlistId,x.img])
        }
    }
    async DeleteWishlist(reqBody){
        await this.db.query('DELETE FROM wishlist WHERE wishlist.id = ($1);',[reqBody.id])
        for (let j=0;j<reqBody.wishItems.length;j++){
            await this.db.query('DELETE FROM wish WHERE wish.id = ($1);',[reqBody.wishItems[j].id])
        }
    }
    async DeleteWishItem(wishesToDelete){
        for (let j=0;j<wishesToDelete.length;j++){
            await this.db.query('DELETE FROM wish WHERE wish.id = ($1);',[wishesToDelete[j]])
        }
    }
}

module.exports = WishlistsRepo