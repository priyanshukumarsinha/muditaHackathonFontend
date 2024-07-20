import React from 'react'
import { RxCross1 } from "react-icons/rx";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Login = ({setShowLogin, search, setShowSignup}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    if(email === '' || password === ''){
      alert('Please fill all the fields');
      return;
    }
    setShowLogin(false);
    // check if email or password is null
    console.log(email, password);

    // backend logic here

    // redirect to dashboard
    navigate('/dashboard');
    
  }

  return (
    <div className='w-full bg-white/30 backdrop-blur-xl flex absolute top-0 justify-center items-center h-screen'>
        <div className='w-1/2 bg-white p-20 rounded-xl relative'>
            <h1 className='text-xl font-bold text-center pb-10'>Login as {search}</h1>
            <form action="" className='flex flex-col gap-5 px-20'>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" placeholder='Email' className='border p-2 rounded-md' required/>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder='Password' className='border p-2 rounded-md' required/>
                <button 
                onClick={(e) => {loginUser(e);}}
                className='border p-2 rounded-md bg-orange-300 text-white'>Login</button>
            </form>
            <RxCross1 
            onClick={() => setShowLogin(false)}
            className= "absolute right-5 top-5 cursor-pointer"/>

            {/* If user doesn't have an account */}
            <div className='w-full bg-white p-20 relative flex gap-2 justify-center items-center '>
                <h1 className='text-sm text-center'>Don't have an account?</h1>
                <p 
                onClick={() =>{setShowLogin(false); setShowSignup(true)}}
                className='text-center text-sm font-semibold'>Sign up</p>
            </div>
        </div>
        
    </div>
  )
}

export default Login