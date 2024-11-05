
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Products from './pages/Products';
import Cart from './pages/Cart';

import Footer from './components/footer/Footer';
import men_banner from "./components/asset/banner_mens.png"
import women_banner from './components/asset/banner_women.png'
import kid_banner from './components/asset/banner_kids.png'
import Loginsignup from './pages/Loginsignup';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/mens' element={<Shopcategory  banner={men_banner}  category="men"/>}/> 
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory  banner={kid_banner} category="kid"/>}/>
        <Route path='/product/:productId' element={<Products />} />
        <Route path='/login' element={<Loginsignup/>}/>

        
        <Route path='/cart' element={<Cart/>}/>
        


      </Routes>
      
      <Footer/>
      
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
