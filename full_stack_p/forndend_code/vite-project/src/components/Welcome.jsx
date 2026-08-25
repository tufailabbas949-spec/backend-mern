import React from 'react'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
   const navigate = useNavigate()
  return (
    <>
    <div className='text-center text-yellow text-3xl'>Welcome</div>
    <div className='text-center'>
         <button className='bg-blue-700 w-50 text-center p-1' onClick={()=>{
        navigate("/users")
        }}>all user list </button>
    </div>
   </>
  )
}

export default Welcome