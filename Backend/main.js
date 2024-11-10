const express=require('express')
const env=require('dotenv')
env.config({
    path:'./.env'
})



let cors=require("cors")
let db=require('./DatabaseConfigue')
const bodyparser=require('body-parser')
let EmployeeRoutes=require('./Routes/EmployeeRoutes')

 
let app=express()

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))


app.use(cors())


db.connect((err)=>{
    if(err) throw err
    else{
        console.log("database connected")
    }
})

app.use('/api',EmployeeRoutes)  


app.listen(process.env.Port,()=>{
    console.log(`Server is running  ${process.env.Port}`)
})