import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../store";
import { cartActions } from "../../slices/cartSlice";

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cart.Cart);

  if (items.length === 0) {
    return (
      <Container>
        <h1>YOUR SHOPPING CART</h1>
        <p>No items in cart</p>
      </Container>
    );
  }

  let totalPrice = 0;
  items.map((item) => {
    totalPrice += item.itemQuantity * item.price;
  });

  return (
    <Container>
      <h1>YOUR SHOPPING CART</h1>
      <Row>
        <Col sm={8}>
          {items.map((item) => (
            <Card key={item.id}>
              <Card.Header as="h5">{item.item} </Card.Header>
              <Card.Body>
                <Image variant="top" src={item.image} width={100} thumbnail />
                <Card.Title>
                  ${item.price} X {item.itemQuantity}={" "}
                  {item.itemQuantity * item.price}
                </Card.Title>

                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    {" "}
                    <Button
                      variant="primary"
                      onClick={() =>
                        dispatch(cartActions.removeItemFromCart(item.item))
                      }
                    >
                      <RiDeleteBin6Line />
                    </Button>{" "}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col sm={4}>
          <h2>TOTAL</h2>
          <p> $ {totalPrice}.00</p>
          <Button onClick={() => navigate("/payment")}>CHECKOUT</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
