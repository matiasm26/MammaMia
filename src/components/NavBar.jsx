import { Container, Navbar } from 'react-bootstrap';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../contexts/PizzaContext';
import { useContext } from 'react';
import SpinningPizza from './SpinningPizza';

export default function NavBar() {

    const { totalCartAmount, formatCurrency } = useContext(PizzaContext);
    
return (
    <Navbar sticky="top text-center mt-1 pt-1">
        <Container className="boxBanner">
            <Link to={'/home'} className="bannermain">
            <SpinningPizza/>
            </Link>
            <h1 className="fw-bold">La Pastaiola di la Nonna!</h1>
            <div className="priceCart">
            <Link to={'/carrito'} className={totalCartAmount ? 'cart-price' : 'cart'}>
            <CartIcon tamaño="2rem" color="white"/>
            <span>Total </span>
            {totalCartAmount ? '  ' + formatCurrency(totalCartAmount) : null}
            </Link>
            </div>
        </Container>
    </Navbar>
    );
}
