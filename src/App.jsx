
import{useState,useEffect} from 'react'
 import axios from 'axios'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'
import './App.css'

function App() {
  let[products,setProducts]= useState([])
  let [showCart,setShowCart]=useState([])
   useEffect(()=>{
     const loadProducts= async()=>{
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products)
       
      } catch (error) {
        console.log("Status:",error.response?.status);
        console.log("URL:",error.config?.url);
        console.log("Response:", error.response?.data);
      }
     } 
     loadProducts();
   } ,[])
  return (
    <>
     
       <Navbar onCartClick={()=> setShowCart(!showCart)}/> 

       {showCart ?<Cart/>:<ProductList products={products} />}
    </>
  )
}

export default App;
