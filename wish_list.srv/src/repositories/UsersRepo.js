class UsersRepo {
    constructor(db) {
        this.db = db
    }
    async AddUser(reqBody){
        await this.db.query ('INSERT INTO users (loginUser,passwordUser) values ($1,$2)',[reqBody.loginUser, reqBody.passwordUser])
    }
}
module.exports = UsersRepo