class WishItem {
    constructor() {
        this.id = ""
        this.idWishlist = ""
        this.text = ""
        this.img = null
    }

    read(row){
        this.id = row.id
        this.idWishlist = row.idwishlist
        this.text = row.text;
        this.img = row.img
    }
}

module.exports = WishItem