import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store";
import { categoryActions } from "../slices/categorySlice";
import { userActions } from "../slices/userSlice";

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { GiSofa } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { productActions } from "../slices/productSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [enteredKeyword, setEnteredKeyword] = useState("");

  const categoryList = useAppSelector((state) => state.category.CategoryList);
  const newCategoryList = ["All Products", ...categoryList];

  const cartItems = useAppSelector((state) => state.cart.Cart);
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.itemQuantity,
    0
  );

  let selectedCategory = "";
  selectedCategory = useAppSelector((state) => state.category.selectedCategory);

  const { isLogged, userData } = useAppSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(userActions.logoutUser());
  };

  const searchKeywordHandler = (e: Event) => {
    e.preventDefault();
    dispatch(
      productActions.setSearchKeyword({ searchKeyword: enteredKeyword })
    );
    setEnteredKeyword("");
  };

  const dropdownHandler = (category: string) => {
    console.log(category);
    dispatch(categoryActions.selectCategory(category));
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <GiSofa /> Comforty
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={
                selectedCategory.length > 0 ? selectedCategory : "Categories"
              }
              id="basic-nav-dropdown"
            >
              {newCategoryList.map((item) => (
                <NavDropdown.Item
                  onClick={() => dropdownHandler(item)}
                  key={item}
                >
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav className="mx-auto">
            {" "}
            {/* Centered Nav */}
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-2"
                value={enteredKeyword}
                onChange={(e) => setEnteredKeyword(e.target.value)}
              />
              <Button variant="primary" onClick={searchKeywordHandler}>
                Search
              </Button>
            </Form>
          </Nav>
          <Nav className="ml-auto">
            <Button variant="light" onClick={() => navigate("/cart")}>
              <AiOutlineShoppingCart />
              Cart {cartItemsCount}
            </Button>
            {isLogged ? (
              <>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate("/user-profile")}>
                    <CgProfile />
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav className="align-items-center">
                  <p className="mb-0 mr-2">Welcome {userData.firstName}</p>
                  <Image
                    src={userData.image}
                    border={1}
                    roundedCircle
                    width={50}
                    height={50}
                  />
                </Nav>
              </>
            ) : (
              <Button variant="light" onClick={() => navigate("/sign-in")}>
                <CgProfile />
                Sign In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
