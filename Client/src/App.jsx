import './App.css'
import 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Products from './Pages/Dashboard/Products';
import NewProduct from './Pages/Dashboard/NewProduct';
import User from './Pages/Dashboard/User';
import UpdateProduct from './Pages/Dashboard/Component/UpdateProduct';
import ProductDetails from './Components/Pages Component/Shop/ProductDetails';
import SignIn from './Components/Public Component/SignIn';
import SignUp from './Components/Public Component/SignUp';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/shop' element={<Shop/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/blog' element={<Blog/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/signin' element={<SignIn/>}/>
          <Route  path='/signup' element={<SignUp/>}/>
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/dashboard/products' element={<Products/>}/>
          <Route  path='/dashboard/newproduct' element={<NewProduct/>}/>
          <Route  path='/dashboard/users' element={<User/>}/>
          <Route  path='/dashboard/editProduct' element={<UpdateProduct/>}/>
          <Route  path='/shop/productdetails/:name/:id' element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
