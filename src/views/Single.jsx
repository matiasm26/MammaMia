import { PizzaContext } from '../contexts/PizzaContext';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import CartIcon from '../components/CartIcon';
import { Link } from 'react-router-dom';
import MyPizza from '../components/MyPizza';

export default function Single() {
const { id } = useParams();
const { pizzas, addToCart, formatCurrency } = useContext(PizzaContext);

return (
<Container>
    {pizzas
        .filter((pizza) => pizza.id === id)
        .map((pizza, index) => (
            <Card key={index} className="row flex-row py-3">
                <Container className="col-12 col-md-4 py-4">
                <Card.Header>
                    <h3 className="text-capitalize fs-5 text-center">
                        {pizza.name}
                    </h3>
                </Card.Header>
                <Card.Img src={pizza.img} alt={pizza.name} />
                </Container>
                <Container className="col-12 col-md-8">
                <Card.Body>
                <Card.Text>{pizza.desc}</Card.Text>
                Ingredients : 
                <ul>
                    {pizza.ingredients.map((ingrediente, index) => (
                    <li key={index}>👨‍🍳 {ingrediente}</li>
                ))}
                </ul>
                </Card.Body>
                <Card.Footer className="g-5">
                <Card.Text className="d-flex justify-content-around align-items-center">
                    <h3 className="fs-5">
                        {formatCurrency(pizza.price)}
                    </h3>
                    <Button onClick={() => addToCart(pizza)}>
                        Add <CartIcon/>
                    </Button>
                    <Link to="/home">
                    <Button className="btn btn-danger">Back</Button>
                    </Link>
                    </Card.Text>
                </Card.Footer>
            </Container>
            </Card>
        ))}
    </Container>
);
}
