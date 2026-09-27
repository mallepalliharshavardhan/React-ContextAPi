import { useCart } from "../context/CartContext"
export default function ProductCard({product}){

   const {addToCart} =useCart()
    return(
        <>
        <img src={product.thumbnail} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </>
    )
}