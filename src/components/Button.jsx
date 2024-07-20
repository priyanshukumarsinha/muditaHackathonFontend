import React from 'react'

const Button = ({text}) => {
  return (
    <button
    className='border p-2 px-5 rounded-md  hover:text-white hover:bg-transparent bg-white text-black'
    >{text}</button>
  )
}

export default Button