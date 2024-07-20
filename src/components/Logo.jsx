import React from 'react'
import { logo } from '../assets'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/')} className="logo font-bold text-lg flex items-center gap-3 cursor-pointer">
        <img src={logo} 
        className='w-8 h-8' alt="" />
        <h1>Mudita</h1>
    </div>
  )
}

export default Logo