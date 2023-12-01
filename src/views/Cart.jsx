import { useContext, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import { PizzaContext } from "../context/Context";

export default function ShoppingCart() {
    const { setCart, addToCart, removePizza, totalPrice, setTotalPrice, addedPizza } = useContext(PizzaContext);

    useEffect(() => {
        const calculateCart = () => {
            const cartItems = addedPizza.reduce((cart, pizza) => {
                const existingCartItem = cart.find(item => item.id === pizza.id);

                if (existingCartItem) {
                    existingCartItem.count += 1;
                    existingCartItem.result = existingCartItem.count * existingCartItem.price;
                } else {
                    cart.push({ ...pizza, count: 1, result: pizza.price });
                }

                return cart;
            }, []);

            setCart(cartItems);

            // Calcular el total sumando los resultados de cada pizza en el carrito
            const newTotalPrice = cartItems.reduce((total, item) => total + item.result, 0);
            setTotalPrice(newTotalPrice);
        };

        calculateCart();
    }, [addedPizza, setCart, setTotalPrice]);

    return (
        <div>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Nombre Pizza</th>
                        <th>Precio</th>
                    </tr>
                </thead>

                <tbody>
                    {addedPizza.map((pizza) => (
                        <tr key={pizza.id}>
                            <td className="pizzaCart"><img src={pizza.img} alt="" /></td>
                            <td>{pizza.name}</td>
                            <td>${pizza.price}</td>
                            <td>
                                <Button variant="primary" onClick={() => removePizza(pizza.id)}> - </Button>
                                {pizza.count}
                                <Button variant="primary" onClick={() => addToCart(pizza.id)}> + </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3">
                            <h4>Total: ${totalPrice}</h4>
                            <Button>Proceder con el pago</Button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
}
