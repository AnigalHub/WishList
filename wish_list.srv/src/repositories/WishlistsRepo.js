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
}

module.exports = WishlistsRepo