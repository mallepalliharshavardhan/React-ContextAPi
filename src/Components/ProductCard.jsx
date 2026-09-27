import { useCart } from "../context/CartContext"
export default function ProductCard({product}){

   const {addToCart} =useCart()
    return(
        <>
        
        <div className=" grid shadow-lg/20 m-5 rounded-lg px-3 py-5 w-60 border border-black  items-center justify-center bg-slate-300">
        <img className="m-1 border border-black bg-stone-100 rounded-lg w-50 justify-center " src={product.thumbnail} alt={product.title}/>
        <h3 className=" m-1 text-lg">{product.title}</h3>
        <p className=" m-1 text-xs">{product.description}</p>
        <p className="m-1">Price:${product.price}</p>
        <button className=' m-1 bg-yellow-400 px-2 py-1 rounded-md' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
         
        </>
    )
}