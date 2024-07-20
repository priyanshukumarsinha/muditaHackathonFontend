import React from 'react'
import { Logo,
    Button
 } from '../components'

const Navbar = () => {
  return (
    <nav className='flex justify-between sticky border-b border-orange-300 top-0 bg-background text-white py-5 px-40 items-center w-full'>
        {/* The Navbar contains the logo of the website and 2 buttons and some links */}
        <Logo />
        <ul className='flex gap-5'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="buttons flex gap-5">
            <Button text='Contact' />
        </div>
    </nav>
  )
}

export default Navbar