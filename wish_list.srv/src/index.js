const {srv} = require('./cfg.json')
const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json({
    limit: '50mb'
}))
app.use(cors())


const apiRoutes = require("./routes")
app.use(srv.prefix,apiRoutes)


app.listen(srv.port, srv.host,function(){
    console.log(`Все работает по адресу http://${srv.host}:${srv.port}`);
});