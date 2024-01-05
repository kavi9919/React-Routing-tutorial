import React from 'react'
import Navbar from '../../Components/Navbar'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>This is home page</h1>
        <Navbar/>
         <div className='product-button'>
         <button onClick={() => navigate("/product")} >Add Products</button>
         </div>
        
    </div>
  )
}

export default Home