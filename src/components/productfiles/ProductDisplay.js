import React from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'

const ProductDisplay = () => {
    const { id } = useParams()
    const displayitems = ProductList[id]

  return (
    <div>
        <div className="display-product">
            <h1>About Product</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed velit voluptatem in harum ab corporis repellendus, soluta culpa distinctio aspernatur alias, sint rerum maiores? Repellendus, hic! Dolorem non aperiam alias nemo ea minima architecto accusamus eveniet qui, maxime quibusdam.</p>
        </div>
    </div>
  )
}

export default ProductDisplay