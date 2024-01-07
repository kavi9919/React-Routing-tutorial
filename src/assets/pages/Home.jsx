import React from 'react'
import Navbar from '../../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { Category } from '../../Components/Category';
const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
       <Category/>

        {/* <h1>This is home page</h1>
        <Navbar/>
         <div className='product-button'>
         <button onClick={() => navigate("/product")} >Add Products</button>
         </div> */}
        
    </div>
  )
}

export default Home