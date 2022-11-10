import React from 'react'
import Button from '../components/Button'
import '../components/Main.css'

const Home = () => {
  return (
    <div>
        <h1 className='h1'>Welcome, Please Sign in</h1>
        <div className='form-control'>
            <label>FirstName</label>
            <input type="text" placeholder='first name' />
            <label>LastName</label>
            <input type="text" placeholder='last name' />
            <label>Email</label>
            <input type="text" placeholder='email@address' />
            <label>PassWord</label>
            <input type="password" placeholder='pass word' />
        <Button btnName='Sign Up' />
        </div>
    </div>
  )
}

export default Home