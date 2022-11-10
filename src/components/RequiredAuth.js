import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './utitlities/auth';

export const RequiredAuth = ({children}) => {
    // const navigate = useNavigate()
    const auth = useAuth()

    if(!auth.user1){
        return <Navigate to="/" />
    }

  return children
   
  
}

export default RequiredAuth;