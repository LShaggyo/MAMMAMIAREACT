import { useContext } from "react"
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/Context"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

export default function PizzaDescription() {
    const params = useParams();
    const { pizzas, addToCart, setPizzaArray, setTotalPrice } = useContext(PizzaContext)
    const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id);
    const pizza = getPizzaById(params.id);

    return (

        <div>
  <Container >
            <Card className = 'text-center mb-4' style={{ width: '30rem' }}>
                <Card.Img variant = "top" className = 'pizza-detail ' src={pizza.img}  />


                <Card.Title className = 'text-uppercase m-2' >{pizza.name}</Card.Title>

                <Card.Text> {pizza.desc} </Card.Text>

                <ListGroup className="list-group-flush text-capitalize pb-3 pt-3"> Ingredientes</ListGroup>

                {pizza.ingredients.map((ingredient) => (
                    <ListGroup.Item className="list-group-flush text-capitalize text-start m-2 "> 🍕 {ingredient}</ListGroup.Item>))}

                <ListGroup className="list-group-flush pb-4 mb-4 text-center"> <span>  Precio: $  {pizza.price}</span></ListGroup>



                <Card.Body>
                    <Button  className="bg-info px-3" onClick={() => { addToCart(pizza.id); setTotalPrice(setPizzaArray(pizza.id)) }}>Agregar al Carro</Button>
                </Card.Body>
            </Card>
            </Container>
        </div>

    )
}