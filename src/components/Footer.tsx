import { Button, Row, Col, Form, Card } from "react-bootstrap";

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

            <div>
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus
            </div>

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
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </div>
          </Col>
        </Row>
      </Card.Body>
      <Card.Header as="p">2023</Card.Header>
    </Card>
  );
};

export default Footer;
