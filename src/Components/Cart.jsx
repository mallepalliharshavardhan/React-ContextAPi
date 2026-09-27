import { useCart} from '../context/CartContext.jsx'; 
 function Cart(){
    const {cart,removeFromCart,getCartTotal} = useCart();
    if(Cart.lenght === 0) return <p>Cart is Empty</p>

    return(
        <>
           <h2>Your Cart</h2>
        <div>
         
        {cart.map(item=> (
            <div  className='w-60 border border-black m-2 shadow-lg/30 rounded-lg' key={item.id}>
       <img className="m-1 border border-black bg-stone-100 rounded-lg w-50 justify-center " src={item.thumbnail} alt={item.title}  />
         <p>{item.title}</p>
         <p >Qty:{item.quantity}</p>
         <p>${item.quantity * item.price.toFixed(2)} </p>
         <button onClick={()=>removeFromCart(item.id)}>Remove</button>

            </div>
        ))}
        <h3>Total: ${getCartTotal()}</h3>
        </div>
        
        
        </>
    )
 }

 export default Cart;