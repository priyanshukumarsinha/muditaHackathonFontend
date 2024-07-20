import React from 'react'
import {
    Button,
    Navbar,
}
from '../index.js'

import {
  poor
} from '../../assets'

import { FaInstagram,
    FaGithub
 } from 'react-icons/fa'

import {
    CiLinkedin
} from 'react-icons/ci'


import Login from '../Login/Login.jsx'
import Signup from '../Signup/Signup.jsx'

 

const Header = () => {
    const [showLogin, setShowLogin] = React.useState(false)
    const [showSignup, setShowSignup] = React.useState(false)
    const [search, setSearch] = React.useState('')
  return (
    <header className='w-full bg-background h-screen relative flex flex-col justify-center items-center'>
        
        {
            showLogin && <Login setShowLogin= {setShowLogin} search = {search} setShowSignup= {setShowSignup}/>
        }

        {
            showSignup && <Signup setShowLogin= {setShowLogin} search = {search} setShowSignup= {setShowSignup}/>
        }

        {/* Header Contains Navbar and one other container*/}
        {/* The Other Container contains a quote and an image */}
        {/* Below the Quote we have 3 buttons which basically makes you login, but if you are already logged in it redirects you to the dashboard */}
        {/* The Navbar contains the logo of the website and 2 buttons and some links */}
        <Navbar />


        {/* the main section contains the part of header where we have a quote on the left div and an image on the right div */}
        {/* Below the quote in the left div, we have 3 buttons asking us wheater we want to donate something, or sign up as an individual, or want to sign up as an NGO */}
        {/* Below that we have our social media links */}
        <main className='h-[85%]'>
            <div className="main flex justify-between items-center px-40 py-20 h-full">
                <div className="quote w-1/2">
                    <h1 className='text-6xl font-bold text-orange-300'>Hunger to Hope</h1>
                    <p className='text-md text-white/60 my-5'>Feed the need, clothe the cause, <span className=''>and join us in making a lasting impact.</span></p>
                    <div className="buttons flex gap-5 mt-28">
                        <Button text={'Donate'} onClick={() => {setShowLogin(true); setSearch('Organization / Company')}} />
                        <Button text={'Login as Individual'} onClick={() => {setShowLogin(true); setSearch('Individual / Volunteer')}} />
                        <Button text={'Login as NGO'} onClick={() => {setShowLogin(true); setSearch('NGO')}} />
                    </div>
                    <div className="social flex gap-5 mt-10 text-orange-300 text-xl">
                        <a href="/"><FaInstagram /></a>
                        <a href="/"><CiLinkedin /></a>
                        <a href='/'><FaGithub /></a>
                    </div>
                </div>
                <div className="image w-1/2">
                    <img src= {poor} alt="" />
                </div>
            </div>
        </main>
    </header>
  )
}

export default Header