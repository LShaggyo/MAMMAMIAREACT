import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { PizzaContext } from '../context/Context';

export default function NavbBar() {

  const { totalPrice } = useContext(PizzaContext);

  return (

    <div>

      <Navbar bg="danger" >

        <Container >

    

          <NavLink to="/"  className=  {({ isActive }) => isActive ? "active" : "not-active" }> MAMMA MIA PIZZA!</NavLink>

          <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : "not-active"}> $ {totalPrice}</NavLink>
        

        
        </Container>

      </Navbar>

    </div>
  )
}