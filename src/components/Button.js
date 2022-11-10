import React from 'react'
import '../components/Main.css'

const Button = ({btnName}) => {
  return (
    <div>
        <button className='btn1'>
           {btnName}
        </button>
    </div>
  )
}

export default Button