import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();

    const handleClearcart = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4 pt-28">
            <h1 className="text-2xl">Cart</h1>
            <div className="w-6/12 m-auto ">
                <button className="p-2 m-2 bg-black text-white rounded-lg text-xl" onClick={handleClearcart}>Clear Cart</button>
                {cartItems.length === 0 && <h1 className="text-xl mt-10 text-red-500">Go & Do Some More Shopping...</h1>} 
                <ItemList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;