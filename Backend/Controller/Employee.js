let db = require('../DatabaseConfigue')
let bcrypt = require('bcryptjs')
let jwt= require('jsonwebtoken')

const salt = 10


exports.EmployeeSave = (req, res) => {
    let EmployeeName = req.body.EmployeeName
    let Email = req.body.Email
    let Address = req.body.Address
    let Phone = req.body.Phone
    let Gender = req.body.Gender
    let StartDate = req.body.StartDate
    let Password = req.body.Password

    

    bcrypt.hash(Password.toString(), salt, (err, hash) => {
        if (err) {
            console.log(err)
        }
        let value = [[EmployeeName, Email, Phone, Address, Gender, StartDate, hash]]
        db.query('insert into employee(EmployeeName,Email,Phone,Address,Gender,StartDate,Password) values ?', [value], (err, result) => {
            if (err) throw err
            else {
                res.send("data saved")
            }
        })

    })

}

exports.login = (req, res)=>{
    let Email = req.body.Email
    let Password = req.body.Password

    let sql  = "select * from employee where Email = ?"
    db.query(sql, [Email],(err, result)=>{
        if(err)  throw err;else{
            bcrypt.compare(Password.toString(),result[0].Password,(err, isMatch)=>{
                if (err) throw err
                else{
                    if 
                    (isMatch==true){
                        // let token=await generatetoken(result[0])
                        // console.log(token)
                        res.json({isMatch})
                    }
                    else{
                        res.send(false)
                    }
                }
            })
        }
        
    })

}