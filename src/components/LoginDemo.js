import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './utitlities/auth';

const LoginDemo = () => {
    const [user, setUser] = useState("");
    const auth = useAuth()
    const navigate = useNavigate()

    const handleSubmit = () => {
        auth.login(user)
        navigate('/product')
    }
  return (
    <div>
        <form onSubmit={handleSubmit} style={{width: '50%', margin: '10px auto', border: 'solid cyan', padding: "40px"}}>
            <label htmlFor="username">
                <input type="text" placeholder='username' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button style={{ width: "20vw", backgroundColor: 'cyan', marginLeft: '10px'}}>Login</button>
        </form>
    </div>
  )
}

export default LoginDemo