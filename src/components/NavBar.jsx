import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { PizzaContext } from '../context/Context';

export default function NavbBar() {
  const { totalPrice } = useContext(PizzaContext);
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    if (cartUpdated) {
      
    }
  }, [cartUpdated]);

  return (
    <div>
      <Navbar bg="success" variant="dark" className="py-2">
        <Container>
          <NavLink to="/" className="navbar-brand text-white font-weight-bold">MAMMA MIA PIZZA!</NavLink>
          <NavLink to="/cart" className="nav-link text-white font-weight-bold">🛒 $ {totalPrice}</NavLink>
        </Container>
      </Navbar>
    </div>
  );
}
