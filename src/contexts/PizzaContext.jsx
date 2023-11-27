import React, { useState, createContext, useEffect } from 'react';

export const PizzaContext = createContext();

export default function PizzaProvider({ children }) {
const [pizzas, setPizzas] = useState([]);
const [cart, setCart] = useState([]);

const fetchPizzas = async () => {
    try {
    const response = await fetch('/pizzas.json');
    if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status}`);
    }
    const data = await response.json();
    setPizzas(data);
    } catch (error) {
        console.error("Error al obtener datos de pizzas:", error);
    }
};

useEffect(() => {
    fetchPizzas();
}, []);

const formatCurrency = (value) => value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });


const addToCart = (pizza) => {
const foundPizzaIndex = cart.findIndex((cartPizza) => cartPizza.id === pizza.id);

if (foundPizzaIndex < 0) {
    pizza.count = 1;
    setCart([...cart, pizza]);
        } else {
        const updatedCart = [...cart];
        updatedCart[foundPizzaIndex].count++;
        setCart(updatedCart);
    }
};

const increaseItemCount = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count++;
    setCart(updatedCart);
};

const decreaseItemCount = (index) => {
    const updatedCart = [...cart];

    if (updatedCart[index].count === 1) {
        updatedCart.splice(index, 1);
    } else {
        updatedCart[index].count--;
    }

        setCart(updatedCart);
    };

    const totalCartAmount = cart.reduce(
        (total, { price, count }) => total + price * count,
        0
    );

return (
    <PizzaContext.Provider
        value={{
            pizzas,
            cart,
            setCart,
            addToCart,
            decreaseItemCount,
            increaseItemCount,
            totalCartAmount,
            formatCurrency,
        }}
    >
        {children}
    </PizzaContext.Provider>
    );
}