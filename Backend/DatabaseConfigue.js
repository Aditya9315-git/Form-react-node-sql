const mysql=require("mysql")
// console.log(process.env.Port)

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.DatabasePass,
    database:'Wise'
})

module.exports=connection