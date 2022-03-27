const uuid = require('uuid')
const WishItem = require("./Wishitem.js")

class Wishlist {
    constructor() {
        this.id = ''
        this.title = ""
        this.wishItems = []
    }

    read(row){
        this.id = row.id
        this.title = row.title;
        this.wishItems = []
    }
    readFromBody(body){
        if(body.id){
            this.id = body.id
        }
        else {
            this.id = uuid.v4();
        }
        this.title = body.title;

        for(let i=0; i<body.wishItems.length; i++ ){
            const wishItem = new WishItem()
           wishItem.readFromBody(body.wishItems[i],this.id)
            this.wishItems.push(wishItem)

        }

    }
}
module.exports = Wishlist