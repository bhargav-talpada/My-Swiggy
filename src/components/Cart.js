import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";
import { CART_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();

    const handleClearcart = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center p-4 pt-28">
            <div className="w-full sm:w-6/12 m-auto flex flex-col items-center justify-center">
                {/* {cartItems.length !== 0 && <button className="p-2 m-2 text-red-600 rounded-lg text-3xl ml-auto" onClick={handleClearcart}>Clear Cart</button>} */}
                {cartItems.length === 0 && <img src={CART_IMG_URL} className="w-80 sm:w-[271px] h-64" alt="Cart Img" />}
                {cartItems.length === 0 && <h1 className="text-xl mt-6 text-[#535665] font-semibold">Your cart is empty</h1>} 
                {cartItems.length === 0 && <h1 className="text-sm mt-2 text-[#7e808c] font-normal">You can go to home page to view more restaurants</h1>} 
                {cartItems.length === 0 && <Link to="/" className="mt-8 py-3 px-5 uppercase bg-[#fc8019] text-white cursor-pointer text-base hover:shadow-2xl">See Restaurent Near You</Link>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;