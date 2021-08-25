import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity, id) => {
    setCart([...cart, { item, quantity, id }]);
    };

    const removeItem = (itemId) => {
    const filterProd = cart.filter((x) => x.item.id !== itemId);
    setCart(filterProd);
    };

    const clear = () => {
    setCart([]);
    };

    useEffect(() => {
    let priceTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      priceTotal += cart[i].item.price * cart[i].quantity;
    }
    setTotal(priceTotal);
    }, [cart]);

    return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, total }}>
          {children}
      </CartContext.Provider>
    );
};