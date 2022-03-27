const uuid = require('uuid')

class WishItem {
    constructor() {
        this.id = ""
        this.idWishlist = ""
        this.text = ""
        this.img = null
    }

    read(row){
        this.id = row.id
        this.idWishlist = row.idWishlist
        this.text = row.text;
        this.img = row.img
    }
    readFromBody(body, idWishlist){
        if(body.id){
            this.id = body.id
        }
        else {
            this.id = uuid.v4();
        }
        this.idWishlist = idWishlist
        this.text = body.text;
        this.img = body.img
    }
}

module.exports = WishItem