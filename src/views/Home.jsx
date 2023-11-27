import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PizzaContext } from '../contexts/PizzaContext';
import CartIcon from '../components/CartIcon';

export default function Home() {
  const { pizzas, addToCart, formatCurrency } = useContext(PizzaContext);
  const navigate = useNavigate();

  return (
    <>
      <Container className="main">
        <div className="mainbody">
          <h1 className="fw-bold">Pastaiola Pizza House</h1>
          <p>The best pizzas you can find in the States!!!</p>
        </div>
      </Container>
      <Container>
        <Row xs={1} md={3} lg={4} className="g-3 mb-3">
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card>
                <Card.Img src={pizza.img} alt={pizza.name} />
                <Card.Header>
                  <span className="text-capitalize fw-bold">{pizza.name}</span>
                </Card.Header>
                <Card.Body>
                  🥗 Ingredients: 
                  <ul>
                    {pizza.ingredients.map((ingrediente, index) => (
                      <li key={index}>🍕 {ingrediente}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Card.Text className="fw-bold mb-2">
                    Price : {formatCurrency(pizza.price)}
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-around">
                    <Button onClick={() => navigate(`/pizza/${pizza.id}`)}>
                      Details 👀
                    </Button>
                    <Button onClick={() => addToCart(pizza)}>
                      Add <CartIcon tamaño="1rem" color="white" />{' '}
                    </Button>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}