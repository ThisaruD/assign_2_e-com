import { Link } from "react-router-dom";

import { Form, Row, Col, Image } from "react-bootstrap";
import { useAppSelector } from "../../store";

const UserProfilePage = () => {
  const userData = useAppSelector((state) => state.user.userData);
  console.log(userData);

  if (userData.email === "") {
    return (
      <div>
        Need to login first
        <Link to="/sign-in">Login Here</Link>
      </div>
    );
  }

  return (
    <>
      <h2>User Profile</h2>
      <Row className=" mb-4">
        <Col>
          <Image src={userData.image} border="1" roundedCircle />
        </Col>

        <Col>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                disabled
                value={userData.username}
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                disabled
                value={userData.email}
                // onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                disabled
                value={userData.firstName}
                // onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                disabled
                value={userData.lastName}
                // onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gender"
                disabled
                value={userData.gender}
                // onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Col>

        <Col></Col>
      </Row>
    </>
  );
};

export default UserProfilePage;
