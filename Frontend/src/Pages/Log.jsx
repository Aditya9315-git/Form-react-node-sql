import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Log() {
    const [values, setvalues] = useState({
        Email: '',
        Password: ''
    })

    let {Email,Password}=values

    const navigate=useNavigate()

    const handlechnages=(e)=>{
        setvalues({...values,[e.target.name]:[e.target.value]})
    }

    const handleLogin= async (e)=>{
        e.preventDefault()

        // let flag=await userLogin(data)

         try{
            const response=await axios.post('http://localhost:3000/api/login', values)
            console.log(response)
            if(response.data.isMatch == true){
                navigate('/')
                alert('Thanks for Registered !!!!')
            }
        }catch(err){
            console.log(err)
            alert('Wrong details !!!!')
            navigate('/login')
        }
        
    }


    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='shadow-lg px-8 py-5 border w-96 cursor-pointer '>
                    <h2 className='text-lg font-bold mb-4'>Login</h2>

                    <form onSubmit={handleLogin}>
                        <div className='mb-2'>
                            <label htmlFor="email" className='block text-gray-700 text-xl'>Email</label>
                            <input type="email" placeholder='Enter Email' name="Email" onChange={handlechnages} className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="Password" className='block text-gray-700 text-xl'>Password</label>
                            <input type="password" name="Password" onChange={handlechnages} placeholder='Enter Password' className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <button className='w-full bg-green-600 text-white py-2'>Submit</button>
                    </form>
                    <div className='text-center'>
                        <span>Don't have an account?</span>
                        <Link to='/register' className='text-lg text-blue-500 p-1'>Register Now</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Log