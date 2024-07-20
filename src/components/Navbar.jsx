import React, { useState } from 'react';
import { Logo, Button } from '../components';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice.js';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const status = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    // Logout
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },      
    };

    fetch('http://localhost:3000/api/v1/user/logout', option)
      .then((res) => res.json())
      .then((data) => {
          // Clear the user data
          localStorage.clear();
          dispatch(logout());
      })
      .catch((err) => console.log(err));
      
      navigate('/');
  };

  return (
    <nav className='flex z-50 sticky top-0 justify-between border-b bg-background text-white py-5 px-5 lg:px-40 items-center w-full'>
      <Logo />
      <div className='hidden lg:flex gap-5'>
        <ul className='flex gap-5'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work Flow</a></li>
        </ul>
      </div>
        <div className="buttons flex gap-5">
          <a href="#Contact">
          <Button text='Contact' />
          </a>
          {
            status && (
              <div
          onClick={() => logoutUser()}
          >
            <Button text= 'Log Out' />
          </div>
            )
          }
        </div>
      <div className='lg:hidden flex items-center'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
          {isOpen ? <MdClose /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className='fixed inset-0 bg-black bg-opacity-50 z-40'>
            <div className='fixed inset-y-0 left-0 w-64 bg-background text-white p-5 flex flex-col gap-5 z-50'>
              <button onClick={() => setIsOpen(false)} className='self-end text-2xl'>
                <MdClose />
              </button>
              <ul className='flex flex-col gap-5 mt-5'>
                <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="/services" onClick={() => setIsOpen(false)}>Services</a></li>
              </ul>
              <div className="buttons flex flex-col gap-5 mt-5">
                <Button text='Contact' />
                <Button text= 'Log Out' />
              </div>
            </div>
          </div>
        </Transition>
      )}
    </nav>
  );
};

export default Navbar;
