import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <div>
      <h1>This is my product page</h1>
    </div>
    <nav>
        <Link to='shirts'>Shirts</Link>
        <Link to='jeans'>Jeans</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products
