import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

import MainImage from "../../components/MainImage";
import classes from "./ProductDetail.module.css";

import { useAppDispatch, useAppSelector } from "../../store";
import { cartActions } from "../../slices/cartSlice";
import { fetchProductById } from "../../actions/product-actions";
import Loader from "../../components/basic-ui-elements/Loader";
import {
  BORDER_ANIMATION,
  SECONDARY_VARIANT,
} from "../../constants/loaderConstants";

const ProductDetailPage = () => {
  const [mainImage, setMainImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductById(Number(productId))).then((action) => {
      setIsLoading(true);
    });
  }, [dispatch, productId]);

  const product = useAppSelector((state) => state.products.productList[0]);

  if (!isLoading) {
    return (
      <div className={classes.loaderContainer}>
        <Loader variant={SECONDARY_VARIANT} animation={BORDER_ANIMATION} />
      </div>
    );
  }

  console.log(product);

  const addCartItem = () => {
    console.log(product?.id, product?.title, product?.price);
    const cart: Cart = {
      item: product?.title,
      price: product?.price,
      image: product?.images[0],
    };
    dispatch(cartActions.addProductToCart(cart));
  };

  const buyNowHandler = () => {
    const cart: Cart = {
      item: product?.title,
      price: product?.price,
      image: product?.images[0],
    };
    dispatch(cartActions.addProductToCart(cart));
    navigate("/payment");
  };

  return (
      <Container className="mt-4">
      <Row className="justify-content-md-center">
        <h2 className={classes.head}>{ product.title}</h2>
          <Col xs lg="2">
            {product.images.map((image, index) => (
              <Row key={index} lg={7}>
                <img
                  className={
                    mainImage === image ? classes.thickerBorder : "border"
                  }
                  src={image}
                  onClick={() => setMainImage(image)}
                  alt={`Product Image ${index + 1}`}
                />
              </Row>
            ))}
          </Col>
  
          <Col md="auto">
            <MainImage image={mainImage || product?.images[0]} />
        </Col>
        
          <Col md="auto" >
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Brand :</Col>
                    <Col>{product?.brand}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Model :</Col>
                    <Col>{product?.category}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Availability :</Col>
                    <Col>{product?.stock}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>{product?.title}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Description :</Col>
                    <Col>{product?.description}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Ratings :</Col>
                    <Col>{product?.rating}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Price :</Col>
                    <Col>
                      ${product?.price}{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        $
                        {product?.price +
                          product?.price * (product?.discountPercentage / 100)}
                      </span>{" "}
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              <Row className="align-items-center">
                <Col>
                  <Button variant="danger" size="sm">
                    -
                  </Button>
                </Col>
  
                <Col>{product.stock}</Col>
  
                <Col>
                  <Button variant="danger" size="sm">
                    +
                  </Button>
                </Col>
  
                <Col>
                  <Button variant="danger" size="sm" onClick={buyNowHandler}>
                    Buy Now
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={addCartItem}
                    className="ml-2"
                  >
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default ProductDetailPage;
