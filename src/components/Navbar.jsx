import { async } from '@firebase/util'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  // console.log(user.email)
  const handleLogout = async () => {
    try{
      await logOut();
      navigate('/');
    } catch (error) {
    console.log(error);
    }
  }
  
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-blue-500 text-4xl font-bold cursor-pointer'>MoviePlus</h1>
      </Link>
      {user?.email ? <div className=''>
          <Link to='/account'>
            <button className='text-white pr-4'>Cuenta</button>
          </Link>
          
            <button onClick={handleLogout} className='bg-blue-500 px-6 py-2 rounded cursor-pointer text-white'>Cerrar sesión</button>
          
        </div> :
        <div className=''>
        <Link to='/login'>
          <button className='text-white pr-4'>Iniciar sesión</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-blue-500 px-6 py-2 rounded cursor-pointer text-white'>Registrarse</button>
        </Link>
      </div>}
        
    </div>
  )
}

export default Navbar