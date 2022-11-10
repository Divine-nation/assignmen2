import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../utitlities/auth';

const Product = () => {
  const auth = useAuth();

  return (
    <div style={{ textAlign: 'center'}}>
       
        <div className="featured-story">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam aut eum illo reprehenderit fugiat nesciunt rem consequatur culpa necessitatibus voluptatibus eos animi illum, veritatis eligendi 
              fugit fuga quisquam sapiente earum alias. Voluptates vitae consequatur minus rem cumque repellendus nihil quidem.</p>
            <h1>Welcome: {auth.user1} </h1>
        </div>
        <div className="featured-nav">
            <ul >
                <li><Link to='newProduct'>New Products</Link></li>
                <li><Link to='popularProduct'>Popular Products</Link></li>
            </ul>
            <Outlet />
        </div>
    </div>
  )
}

export default Product