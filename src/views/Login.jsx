import React, { Component } from "react";
import { Link } from 'react-router-dom';
import fire from '../core/Firebase'

import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  submitLogin = () => {
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        if (res.user.uid) {
          localStorage.setItem('user', JSON.stringify(res.user));
          window.location.href = '/admin/dashboard';
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="content login-form">
        <Grid fluid>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <Card
                title="Login"
                content={
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={(event) => this.handleChange(event)}></input>
                      </div>

                      <div className="form-group col-md-12">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" value={this.state.password} onChange={(event) => this.handleChange(event)}></input>
                      </div>
                    </div>

                    <div className="form-row px-4 text-center">
                      <a className="btn btn-success btn-fill mr-3" onClick={() => { this.submitLogin() }}>Login</a>
                    </div>
                  </form>
                }
              />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;