class Wishlist {
    constructor() {
        this.id = ''
        this.title = ""
        this.WishItems = []
    }

    read(row){
        this.id = row.id
        this.title = row.title;
        this.WishItems = []
    }
}
module.exports = Wishlist