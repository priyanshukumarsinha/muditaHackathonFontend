import React from 'react'
import { RxCross1 } from "react-icons/rx";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';
import { useDispatch } from 'react-redux';

const Login = ({ setShowLogin, search, setShowSignup }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async(e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill all the fields');
      return;
    }
    setShowLogin(false);
    // check if email or password is null
    console.log(email, password);

    // backend logic here
            // login the user
            const loginData = {
              email,
              password,
              type: search == 'NGO' ? 'ngo' : (search == 'Individual / Volunteer' ? 'individual' : 'company')
          }
  
          const loginOptions = {
              method: 'POST',
              credentails: 'same-origin',

              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(loginData),
          }

          const loginResponse = await fetch('http://localhost:3000/api/v1/user/login', loginOptions);
          const loginResData = await loginResponse.json();
          const loggedInUser = loginResData.data.user;

          console.log(loginResData)
  
          console.log(loggedInUser);
  
          localStorage.setItem('accessToken', loginResData.data.accessToken);
          localStorage.setItem('refreshToken', loginResData.data.refreshToken);
          localStorage.setItem('user', JSON.stringify(loggedInUser));
  
          // dispatch login action
          dispatch(login(loggedInUser));
          // redirect to dashboard
          navigate('/dashboard');

  };

  return (
    <div className='w-full bg-white/30 backdrop-blur-xl flex absolute top-0 justify-center items-center h-screen'>
      <div className='w-full max-w-md bg-white p-6 sm:p-10 md:p-10 rounded-xl relative mx-4 sm:mx-auto'>
        <h1 className='text-xl font-bold text-center pb-5 md:pb-10'>Login as {search}</h1>
        <form action="" className='flex flex-col gap-4 sm:gap-5 px-4 sm:px-10 md:px-5'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text" placeholder='Email' className='border p-2 rounded-md' required />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder='Password' className='border p-2 rounded-md' required />
          <button
            onClick={(e) => { loginUser(e); }}
            className='border p-2 rounded-md bg-orange-300 text-white'>Login</button>
        </form>
        <RxCross1
          onClick={() => setShowLogin(false)}
          className="absolute right-5 top-5 cursor-pointer" />

        {/* If user doesn't have an account */}
        <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-2 pt-4'>
          <h1 className='text-sm text-center'>Don't have an account?</h1>
          <p
            onClick={() => { setShowLogin(false); setShowSignup(true); }}
            className='text-center text-sm font-semibold cursor-pointer'>Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
