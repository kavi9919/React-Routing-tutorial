import React from 'react'
import { useNavigate,Link,Outlet } from 'react-router-dom'

export const AddProduct = () => {
    const navigate=useNavigate();
  return (
    <>
    <div><h1>Add Products Here</h1></div>

    <nav>
            <Link className='nav-link' to='features'>Features</Link>
            <Link className='nav-link' to='new'>New</Link>
    </nav>
    <Outlet/>
    <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}
