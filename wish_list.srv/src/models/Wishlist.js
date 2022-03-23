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
}
module.exports = Wishlist