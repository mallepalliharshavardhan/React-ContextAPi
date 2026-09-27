import { useCart } from "../context/CartContext";

export default function Navbar({onCartClick}){
   const {cartCount}  =useCart();
    return(
        <>
        <div className='sticky top-0 p-1 place-items-center justify-around flex bg-linear-65 from-purple-500 to-pink-500'>
        <h1 className='text-2xl bg-black rounded-md text-white px-4 m-2'>Store</h1>
        <input onChange={(e)=> filterSearch(e.target.value)} className='py-3 border border-black h-4 b-slate text-white rounded-md hover:bg-black delay-350' type='text' placeholder="Search products"/>
        <button className='bg-yellow-400 px-2 rounded-md m-2 hover:transition'  onClick={onCartClick}>Cart 🛒 ({cartCount()})</button>
        </div>
        </>
    )
}       