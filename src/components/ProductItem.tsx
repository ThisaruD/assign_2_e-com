import { FC } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaCartPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../slices/cartSlice";
import { Link } from "react-router-dom";

const ProductItem: FC<{
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}> = ({ id, title, description, price, image }) => {
  const dispatch = useDispatch();

  const addCartItem = () => {
    console.log(id, title, price);
    const cart: Cart = { item: title, price, image };
    dispatch(cartActions.addProductToCart(cart));
  };

  return (
    <Card
      className="mb-4"
      style={{
        width: "18rem",
        height: "100%",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        marginBottom: "20px", // Add margin at the bottom
      }}
    >
      <Link to={`${id}`}>
        <Card.Img variant="top" src={image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          
        </Card.Body>
      </Link>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <div className="d-flex justify-content-between align-items-center">
            <span>$ {price}.00</span>
            <Button onClick={addCartItem} variant="primary">
              <FaCartPlus />
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProductItem;
