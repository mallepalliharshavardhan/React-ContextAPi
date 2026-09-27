import { useCart } from "../context/CartContext";

export default function Navbar({onCartClick}){
   const {cartCount}  =useCart();
    return(
        <>
        <div className='h-10 item-center justify-around flex bg-linear-65 from-purple-500 to-pink-500'>
        <h1 className='text-2xl bg-black rounded-md text-white px-4'>Store</h1>
        <button   onClick={onCartClick}>Cart ({cartCount()})</button>
        </div>
        </>
    )
}   