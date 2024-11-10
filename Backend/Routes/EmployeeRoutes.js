let express=require('express')
let router=express.Router()

let EmployeeController=require('../Controller/Employee')

router.post('/EmployeeSave',EmployeeController.EmployeeSave)
router.post('/login',EmployeeController.login)



module.exports=router