import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [values, setvalues] = useState({
        EmployeeName: '',
        Email: '',
        Phone: '',
        Address: '',
        Gender: '',
        StartDate: '',
        Password: ''
    })

    const navigate=useNavigate()

    const handlechnages=(e)=>{
        setvalues({...values,[e.target.name]:[e.target.value]})
    }

    const handlesubmit= async (e)=>{
        e.preventDefault()

         try{
            const response=await axios.post('http://localhost:3000/api/EmployeeSave', values)
            // console.log(response)
            if(response.status===200){
                navigate('/login')
            }
            alert('Thanks for Registered !!!!')
         }catch(err){
            console.log(err)
         }
        
    }


    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='shadow-lg px-8 py-5 border w-96 cursor-pointer '>
                    <h2 className='text-lg font-bold mb-4'>Register</h2>

                    <form onSubmit={handlesubmit}>
                        <div className='mb-2'>
                            <label htmlFor="EmployeeName" className='block text-gray-700 text-xl'>EmployeeName</label>
                            <input type="text" placeholder='Enter EmployeeName' name="EmployeeName" onChange={handlechnages} required className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="email" className='block text-gray-700 text-xl'>Email</label>
                            <input type="email" placeholder='Enter Email' name="Email" onChange={handlechnages} required className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="Phone" className='block text-gray-700 text-xl'>Phone</label>
                            <input type="number" placeholder='Enter Number' name="Phone" onChange={handlechnages} required className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="Address" className='block text-gray-700 text-xl'>Address</label>
                            <input type="text" placeholder='Enter Address' name="Address" onChange={handlechnages} required className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2 flex p-4 items-center justify-between border w-full ' >
                            <label htmlFor="Gender"  className='block text-gray-700 text-xl' >Gender</label>

                            <label>
                            <input type="radio" name='Gender' onChange={handlechnages} value="male" id='male' />Male
                            </label>
                            <label>
                            <input type="radio" name='Gender' onChange={handlechnages} value="Female" id='Female'/>Female
                            </label>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="StartDate" className='block text-gray-700 text-xl'>StartDate</label>
                            <input type="date" required name="StartDate" onChange={handlechnages} className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="Password" className='block text-gray-700 text-xl'>Password</label>
                            <input type="password" required name="Password" onChange={handlechnages} placeholder='Enter Password' className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <button className='w-full bg-green-600 text-white py-2'>Submit</button>
                    </form>
                    <div className='text-center'>
                        <span>Already have a account?</span>
                        <Link to='/login' className='text-lg text-blue-500 p-1'>Login</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register