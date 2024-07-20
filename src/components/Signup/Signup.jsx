import React from 'react'
import { RxCross1 } from "react-icons/rx";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Signup = ({setShowLogin, search, setShowSignup}) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [description, setDescription] = React.useState('')

    const navigate = useNavigate();

    const signupUser = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || phoneNumber === '' || password === '' || description === ''){
            alert('Please fill all the fields');
            return;
        }
        setShowSignup(false);
        // check if email or password is null
        console.log(name, email, phoneNumber, password, description);
    
        // backend logic here

        // redirect to dashboard
        navigate('/dashboard');
    }
  return (
    <div className='w-full bg-white/30 backdrop-blur-xl flex absolute top-0 justify-center items-center h-screen'>
        <div className='w-1/2 bg-white p-20 rounded-xl relative top-20'>
            <h1 className='text-xl font-bold text-center pb-10'>Signup as {search}</h1>
            <form action="" className='flex flex-col gap-5 px-20'>
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" placeholder='Name' className='border p-2 rounded-md' />
                <input 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number" placeholder='Phone Number' className='border p-2 rounded-md' />
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder='Email' className='border p-2 rounded-md' />
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder='Password' className='border p-2 rounded-md' />
                <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='A brief description about youself ... ' className='border p-2 rounded-md'></textarea>
                <button 
                onClick={(e) => {signupUser(e)}}
                className='border p-2 rounded-md bg-orange-300 text-white'>Create Account</button>
            </form>
            <RxCross1 
            onClick={() => setShowSignup(false)}
            className= "absolute right-5 top-5 cursor-pointer"/>

            {/* If user doesn't have an account */}
            <div className='w-full bg-white p-20 relative flex gap-2 justify-center items-center '>
                <h1 className='text-sm text-center'>Already have an account?</h1>
                <p 
                onClick={() =>{setShowSignup(false); setShowLogin(true)}}
                className='text-center text-sm font-semibold'>Login</p>
            </div>
        </div>
        
    </div>
  )
}

export default Signup