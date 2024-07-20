import React from 'react'
import { logo } from '../assets'

const Logo = () => {
  return (
    <div className="logo font-bold text-lg flex items-center gap-3">
        <img src={logo} className='w-8 h-8' alt="" />
        <h1>Mudita</h1>
    </div>
  )
}

export default Logo