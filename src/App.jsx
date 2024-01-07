import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Contact from './assets/pages/Contact'
import { AddProduct } from './assets/pages/AddProduct'
import NewProducts from './Components/NewProducts'
import FeaturesProducts from './Components/FeaturesProducts'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/contact' element={<Contact/>}/>

        <Route path='/product' element={<AddProduct/>}>
        {/* set default tab */}
           <Route index element={<FeaturesProducts/>}></Route>  
           <Route path='new' element={<NewProducts/>}></Route>
           <Route path='features' element={<FeaturesProducts/>}></Route>
        </Route>
      
      
      </Routes>
    
    </>
  )
}

export default App
