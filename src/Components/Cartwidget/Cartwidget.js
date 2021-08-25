import { FaCartPlus } from "react-icons/fa";
import "./Cartwidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cartwidget = () => {
    const { cart } = useContext(CartContext);

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity;
    }

    return (
        <>
        <FaCartPlus className="cart" />
        {total >= 1 && <span className={"cart__total"}>{total}</span>}
        </>
    );
};

export default Cartwidget;