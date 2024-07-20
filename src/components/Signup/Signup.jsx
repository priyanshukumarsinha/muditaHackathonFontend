import React from 'react'
import { RxCross1 } from "react-icons/rx";
import Button from '../Button';
import { Form, useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';
import { useDispatch } from 'react-redux';

const Signup = ({setShowLogin, search, setShowSignup}) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [description, setDescription] = React.useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signupUser = async(e) => {
        e.preventDefault();
        if(name === '' || email === '' || phoneNumber === '' || password === '' || description === ''){
            alert('Please fill all the fields');
            return;
        }
        // check if email or password is null
        console.log(name, email, phoneNumber, password, description);
    
        // backend logic here
        const data = new FormData();

        data.append('name', name);
        data.append('email', email);
        data.append('phoneNumber', phoneNumber);
        data.append('password', password);
        data.append('description', description);
        data.append('type', search == 'NGO' ? 'ngo' : (search == 'Individual / Volunteer' ? 'individual' : 'company'));
        data.append('avatar', document?.getElementById('avatar')?.files[0]);
        data.append('logo', document?.getElementById('logo')?.files[0]);

        const options = {
            method: 'POST',
            body: data,            
        }

        const response = await fetch('http://localhost:3000/api/v1/user/register', options);
        const resData = await response.json().data;

        setShowSignup(false);

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

        console.log(loggedInUser);

        localStorage.setItem('accessToken', loginResData.data.accessToken);
        localStorage.setItem('refreshToken', loginResData.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(loggedInUser));

        // dispatch login action
        dispatch(login(loggedInUser));
        // redirect to dashboard
        navigate('/dashboard');


    }
  return (
    <div className='w-full bg-white/30 backdrop-blur-xl flex absolute top-0 justify-center items-center h-screen'>
        <div className='w-full max-w-md bg-white p-6 sm:p-10 md:p-5 rounded-xl relative top-20 mx-4 sm:mx-auto'>
            <h1 className='text-xl font-bold text-center pb-5 md:pb-10'>Signup as {search}</h1>
            <form 
            onSubmit={(e) => {signupUser(e)}}
            action="" className='flex flex-col gap-4 sm:gap-5 px-4 sm:px-10 ' enctype='multipart/form-data'>
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
                placeholder='A brief description about yourself...' className='border p-2 rounded-md'></textarea>
                Avatar : <input type='file' name='avatar' id='avatar' className='avatar border p-2 rounded-md'/>
                Logo : <input type='file' name='logo' id='logo' className='logo border p-2 rounded-md'/>
                <button 
                type='submit'
                className='border p-2 rounded-md bg-orange-300 text-white'>Create Account</button>
            </form>
            <RxCross1 
            onClick={() => setShowSignup(false)}
            className="absolute right-5 top-5 cursor-pointer"/>

            {/* If user doesn't have an account */}
            <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-2 pt-4'>
                <h1 className='text-sm text-center'>Already have an account?</h1>
                <p 
                onClick={() =>{setShowSignup(false); setShowLogin(true)}}
                className='text-center text-sm font-semibold cursor-pointer'>Login</p>
            </div>
        </div>
    </div>
  )
}

export default Signup
