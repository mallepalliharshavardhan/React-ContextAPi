import { useCart } from "../context/CartContext";

export default function Navbar({onCartClick}){
   const {cartCount}  =useCart();
    return(
        <>
        <div className=' p-1 place-items-center justify-around flex bg-linear-65 from-purple-500 to-pink-500'>
        <h1 className='text-2xl bg-black rounded-md text-white px-4 m-2'>Store</h1>
        <input className='border border-black h-8 b-slate text-black' type='text'/>
        <button className='bg-yellow-400 px-2 rounded-md m-2'  onClick={onCartClick}>Cart 🛒 ({cartCount()})</button>
        </div>
        </>
    )
}   