import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './utitlities/auth'

const Navbar = () => {
  const auth = useAuth()

    const handleLogout = () => {
      auth.logout()
      navigate('/')
    };

    const navigate = useNavigate()


  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
          {!auth.user1 ? <li>
            <NavLink to="/LoginDemo" className='nav-link' >Login</NavLink>
          </li> : 
          <li> <p className='nav-link' onClick={handleLogout} >Log Out</p> </li> 
          }

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar