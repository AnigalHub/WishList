class UsersRepo {
    constructor(db) {
        this.db = db
    }
    async AddUser(reqBody){
        console.log(reqBody)
        await this.db.query ('INSERT INTO users (id, loginUser,passwordUser) values ($1,$2,$3)',[reqBody.id,reqBody.loginUser, reqBody.passwordUser])
    }
}
module.exports = UsersRepo