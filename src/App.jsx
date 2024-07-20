import React from 'react'

import { Header } from './components/LandingPage'
import KommunicateChat from './components/Chatbot'
// This is the Landing Page of the website : where the user will land first
const App = () => {
  return (
    <div> 
        {/* Header */}
        {/* Header Contains Navbar and one other container*/}
        {/* The Other Container contains a quote and an image */}
        {/* Below the Quote we have 3 buttons which basically makes you login, but if you are already logged in it redirects you to the dashboard */}
        {/* The Navbar contains the logo of the website and 2 buttons and some links */}
        <KommunicateChat/>
        <Header />
        




    </div>
  )
}

export default App