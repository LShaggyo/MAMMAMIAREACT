import { useContext } from "react"
import { NavLink } from 'react-router-dom';
import { PizzaContext } from "../context/Context";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {

    const {pizzas, addToCart, setPizzaArray, setTotalPrice} = useContext(PizzaContext);


    return (

        <div>

            <header className="header">
                <h1>¡Pizzería Mamma Mia!</h1>
                <h4>Tenemos las mejores pizzas que podrias encontrar</h4>
            </header>


            <Container>
            
            <CardGroup className="m-1 text-align-center"> {pizzas.map((pizza) => (

                <Card className = ' m-1 ' style={{ width: '18rem' }} key={pizza.id} >

                    <Card.Img variant="top"  src={pizza.img} />

                    <Card.Body>
                        <Card.Title className = ' text-capitalize text-center '>{pizza.name}</Card.Title>

                        <ListGroup className="list-group-flush p-3 text-center text-decoration-underline"> Ingredientes </ListGroup>

                        {pizza.ingredients.map((ingredients) => (

                            <ListGroup.Item className = ' text-capitalize '> 🍕 {ingredients}</ListGroup.Item>))}

                        <ListGroup className="list-group-flush"><span>Price $ {pizza.price}</span></ListGroup>

                        <Card.Body>

                            <NavLink to={`/pizza/${pizza.id}`}>

                                <Button className='btn-detail m-2 ps-2 pe-2 pb-1 pt-1' >Detalles</Button>

                            </NavLink>

                            <Button className='btn-add m-2 px-3 ' onClick={() => { addToCart(pizza.id); setTotalPrice(setPizzaArray(pizza.id)) }}>Agregar</Button>

                        </Card.Body>
                    </Card.Body>

                </Card>))}
           </CardGroup>
           
            </Container >
        </div >
    )
}
