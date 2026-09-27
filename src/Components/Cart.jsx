import { useCart} from '../context/CartContext.jsx'; 
 function Cart(){
    const {cart,removeFromCart,getCartTotal} = useCart();
    if(Cart.lenght === 0) return <p>Cart is Empty</p>

    return(
        <>
        <h2>Your Cart</h2>
        {cart.map(item=> (
            <div key={item.id}>
       <img src={item.thumbnail} alt={item.title}  />
         <p>{item.title}</p>
         <p>Qty:{item.quantity}</p>
         <p>INR:{item.quantity * item.price}.toFixed(2) </p>
         <button onClick={()=>removeFromCart(item.id)}>Remove</button>

            </div>
        ))}
        <h3>Total: ${getCartTotal()}</h3>
        
        </>
    )
 }

 export default Cart;