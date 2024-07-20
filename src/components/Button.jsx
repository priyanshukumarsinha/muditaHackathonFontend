import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button
    className='border p-2 px-5 rounded-md  hover:text-white hover:bg-transparent bg-white text-black'
    onClick={onClick}
    >{text}</button>
  )
}

export default Button