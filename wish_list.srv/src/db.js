const { mainDB } = require('./cfg.json') // json файл - все по бд
const { Pool } = require('pg') // подключение к базе
const pool = new Pool(mainDB) // объект = файл с данными по бд
module.exports = pool