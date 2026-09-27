import { useCart} from '../context/CartContext.jsx'; 
 function Cart(){
    const {cart,removeFromCart,getCartTotal} = useCart();
    if(Cart.lenght === 0) return <p>Cart is Empty</p>

    return(
        <>
           <h2>Your Cart</h2>
        <div className=' flex flex-wrap shadow-lg/20'>
         
        {cart.map(item=> (
            <div  className=' m-5 rounded-lg px-3 py-5 w-60 border border-black  items-center justify-center ' key={item.id}>
       <img className="m-1 border border-black bg-stone-100 rounded-lg w-50 justify-center   " src={item.thumbnail} alt={item.title}  />
         <p>{item.title}</p>
         <p >Qty:{item.quantity}</p>
         <p>${item.quantity * item.price.toFixed(2)} </p>
         <button className=' m-1 bg-red-500 px-2 py-1 rounded-md' onClick={()=>removeFromCart(item.id)}>Remove</button>

            </div>
        ))}
        <h3 clasName='p-2 bg-yellow-400 rounded-xl'>Total: ${getCartTotal()}</h3>
        </div>
        
        
        </>
    )
 }

 export default Cart;