import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Button, Col, Form, Row } from "react-bootstrap";
import classes from "./SignInPage.module.css";
import { userLogin } from "../../actions/user-actions";
import { useAppDispatch } from '../../store';


function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (event:Event) => {
    event.preventDefault();
    console.log(username, password);
    const userData = {username,password}
    dispatch(userLogin(userData)).then(() => { 
      navigate("/user-profile")
    }).catch((err) => { 
      console.log(err)
    }) 

  };

  return (
    <div>
      <div className={classes.main}>
        <h1 className={classes.head}>Sign In</h1>
        <Form onSubmit={signInHandler}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <fieldset></fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
