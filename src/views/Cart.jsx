import { Container, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';
import ItemCart from '../components/ItemCart';
import { Link } from 'react-router-dom';
import MyPizza from '../components/MyPizza';



export default function Cart() {
const { cart } = useContext(PizzaContext);

return (
    <Container className="text-center pizzaList">
        <div>
        <h1>Detailed List:</h1>
        {cart.length > 0 && (
    <ItemCart />
        )}
        {cart.length === 0 && (
        <p>You have no pizzas selected! Please go back and select one 😋</p>
        )}
        </div>
        <div className="pixelPizza">
        <MyPizza/>
        </div>
        <div>
        <Link to="/home">
        <Button className="btn btn-primary mb-3">Back to Home</Button>
        </Link>
        </div>
    </Container>
);
}