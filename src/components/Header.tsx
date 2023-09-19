import { useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../store";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GiSofa } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//mport Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import { useEffect, useState } from "react";
import { Category, fetchCategory } from "../slices/categorySlice";

function Header() {
  const items = useAppSelector((state) => state.category.CategoryList);

  //const items = useSelector((state: RootState) => state.category.categoryList)
  //const count = useSelector((state: RootState) => state.count.value)
  //console.log(items)
  //console.log(count)

  const cartItems = 0;
  //const items = ["it1","it2","it3"]
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="#home">
          <GiSofa /> Comforty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {items.map((item:Category) => (
                <NavDropdown.Item href="#action/3.1" key={item}>{item}</NavDropdown.Item>
              ))}

              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Form>
              <Row>
                <Col></Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>

                {/* <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col> */}
                <Col>
                  <Button>
                    <AiOutlineShoppingCart />
                    Cart {cartItems}
                  </Button>
                </Col>
                <Col>
                  <Button>
                    <CgProfile />
                    Profile
                  </Button>
                </Col>
              </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //   <Navbar className="bg-body-tertiary justify-content-between">
    //   <Navbar.Brand href="#home">
    //          <GiSofa /> Comforty
    //     </Navbar.Brand>
    //     <NavDropdown title="Categories" id="basic-nav-dropdown">
    //              {items.map((item) => (
    //                <NavDropdown.Item href="#action/3.1">{item}</NavDropdown.Item>
    //              ))}
    //       </NavDropdown>
    //   <Form >
    //       <Row>

    //       <Col xs="auto">
    //         <Form.Control
    //           type="text"
    //           placeholder="Search"
    //           className=" mr-sm-2"
    //         />
    //         </Col>

    //       <Col xs="auto">
    //         <Button type="submit">Submit</Button>
    //         </Col>

    //     </Row>
    //   </Form>
    // </Navbar>
  );
}

export default Header;
