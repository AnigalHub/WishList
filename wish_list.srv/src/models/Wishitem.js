class WishItem {
    constructor() {
        this.id = ""
        this.text = ""
        this.img = null
    }

    read(row){
        this.id = row.id
        this.text = row.text;
        this.img = row.img
    }
}

module.exports = WishItem