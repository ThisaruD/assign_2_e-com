import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// const Loader: FC<{ variant: string; animation: string; }> = ({ variant,animation}) => {

const Product: FC<{ title: string; price: number; description: string; image: string }> = ({ title,description,price,image}) =>{
  return (
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ image} />
          
      <Card.Body>
              <Card.Title>{ title}</Card.Title>
        <Card.Text>
                  {description }
        </Card.Text>
      </Card.Body>
       <ListGroup className="list-group-flush">
              <ListGroup.Item>$ { price}.00</ListGroup.Item>
              </ListGroup>
       {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      {/* </Card.Body>  */}
    </Card>
  );
}

export default Product;