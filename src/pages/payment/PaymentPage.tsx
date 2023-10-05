import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  Form,
  ListGroup,
} from "react-bootstrap";
import { useAppSelector } from "../../store";
import { cartActions } from "../../slices/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa, FaCcMastercard, FaAmazonPay } from "react-icons/fa";

const PaymentPage = () => {
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cart.Cart);
  const isLogged = useAppSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (!isLogged) {
      navigate("/sign-in");
    }
  }, [isLogged, navigate]);

  const subTotalPrice = items.map((item) => item.itemQuantity * item.price);
  const totalPrice = subTotalPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const salesTaxPrice = totalPrice * 0.065;
  const totalDuePrice = totalPrice + salesTaxPrice;

  return (
    <Container>
      <Row>
        <Col>
          {/* <Col sm={8}> */}
          {items.map((item) => (
            <Card key={item.item}>
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
          {/* </Col> */}
        </Col>
        <Col className="mt-5">
          <Row>
            <Col>Sub Total</Col>
            <Col> ${totalPrice}</Col>
          </Row>
          <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
          <Row>
            <Col>Sales Tax(6.5%)</Col>
            <Col> ${salesTaxPrice}</Col>
          </Row>
          <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
          <Row>
            <Col>Total Due</Col>
            <Col> ${totalDuePrice}</Col>
          </Row>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Card Details :</Col>
                </Row>
                <Col>
                  <Form.Group className="mt-3" controlId="">
                    <div className="d-flex align-items-center">
                      <FaCcVisa className="mx-2" />
                      <FaCcMastercard className="mx-2" />
                      <SiAmericanexpress className="mx-2" />
                      <FaAmazonPay className="mx-2" />
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="2345 2344 234 2234"
                    />
                  </Form.Group>
                </Col>
                <Row>
                  <Col md={5}>
                    <Form.Group controlId="">
                      <Form.Control
                        type="text"
                        placeholder="MM/YY"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="">
                      <Form.Control
                        type="text"
                        placeholder="CVC"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Name on Card :</Col>
                  <Form.Group controlId="">
                    <Form.Control type="text" placeholder=""></Form.Control>
                  </Form.Group>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Form.Group controlId="">
                      <Form.Control
                        type="text"
                        placeholder="Delivery Address"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Check // prettier-ignore
                  type="checkbox"
                  id="checkbox"
                  label="Use Current Address"
                />
              </ListGroup.Item>
              <Form.Group controlId="">
                <Form.Control type="text" placeholder="Remarks"></Form.Control>
              </Form.Group>
              <ListGroup.Item className="d-flex justify-content-center">
                <Button variant="primary">{`Pay $${totalDuePrice}`}</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
