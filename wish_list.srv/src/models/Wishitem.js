class WishItem {
    constructor() {
        this.id = ""
        this.idwishlist = ""
        this.text = ""
        this.img = null
    }

    read(row){
        this.id = row.id
        this.idwishlist = row.idwishlist
        this.text = row.text;
        this.img = row.img
    }
}

module.exports = WishItem