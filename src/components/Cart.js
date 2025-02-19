import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/createSlice";
import ItemList from "./ItemList";

const Cart = ()=>{
    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    
    return (
    <div className="text-center m-4 p-4 ">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="w-6/12 m-auto border">
            <button className="font-bold text-2xl rounded-lg bg-black text-white p-2 m-2" onClick={handleClearCart}>Clear Cart
            </button>
            {cartItems.length===0 && (<h1>Your cart is empty. Please add some items</h1>)} 
            <ItemList items = {cartItems} />                                                                 
        </div>
    </div>
    );
}

export default Cart;