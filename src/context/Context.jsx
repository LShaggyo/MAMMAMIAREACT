import { useState, useEffect } from "react"
import { createContext } from "react" 

export const PizzaContext = createContext()

export function Provider({ children }) {

  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [prices, setPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getData = async () => {
    const res = await fetch("./pizzas.json");
    const data = await res.json();
    setPizzas(data);
  };

  const addedPizza = cart.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });

  const addToCart = (id) => {
    const pizza = pizzas.find((pizza) => pizza.id === id);
    setCart((prevCart) => [...prevCart, pizza]);
  };

  const removePizza = (id) => {
    const { index, price } = cart.reduce((accumulator, pizza, currentIndex) => {
      if (pizza.id === id) {
        accumulator.index = currentIndex;
        accumulator.price = pizza.price;
      }
      return accumulator;
    }, { index: -1, price: 0 });

    if (index !== -1) {
      cart.splice(index, 1);
      const flattenedCart = cart.flat();
      setCart(flattenedCart);

      const indexPrice = values.findIndex(element => element === price);
      if (indexPrice !== -1) {
        prices.splice(indexPrice, 1);
        const updatedPrices = [...values];
        setPrices(updatedPrices);
        setTotalPrice(totalPrice - price);
      };
    };
  }

  const setArrayPizza = (id) => {
    const pizzaFilt = pizzas.find(pizza => pizza.id === id);
    const price = pizzaFilt.price;
    values.push(price)
    setTotalPrice(calculatedPrice + price);
    const response = values.reduce((a, b) => a + b)
    return response
  };


  useEffect(() => {
    getData()
  }, [])

  const globalState = {


    pizzas,
    cart,
    prices,
    setCart,
    setPrices,
    totalPrice,
    setTotalPrice,
    addedPizza,
    removePizza,
    setArrayPizza,
    addToCart,
 
  };
 
  return (

    <PizzaContext.Provider value={globalState}>{children}</PizzaContext.Provider>
  );
}