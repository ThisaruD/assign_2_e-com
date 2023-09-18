import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { GiSofa } from "react-icons/gi";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <div>
              <GiSofa size="2rem" /> Comforty
            </div>

            <p>
              This is ecommerce wesiute. sdsdsd sdsds sdsd sdsd. sdwerd sdsd sww
              sd
            </p>

            <BiLogoFacebookCircle />
            <BiLogoTwitter />

            <BiLogoInstagram />
            <BiLogoPinterest />
            <BiLogoYoutube />
          </Col>
          <Col></Col>
          <Col>
            NEWSLETTER
            <Form.Control
              type="text"
              placeholder="Your email"
              className=" mr-sm-2"
            />
            <Button type="submit">Subscribe</Button>
            <p>Hello this ti news letter</p>
          </Col>
        </Row>
      </Card.Body>
      <Card.Header as="p">
        <p>@ 2023</p>
      </Card.Header>
    </Card>
  );
};

export default Footer;
