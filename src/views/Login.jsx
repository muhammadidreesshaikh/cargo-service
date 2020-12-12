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
      if (res.user.uid){
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
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Login"
                content={
                  <form>
                    <div className="col-12 col-md-12 col-lg-12">
                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" name="email" class="form-control" value={this.state.email} onChange={(event) => this.handleChange(event)} placeholder="Email"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" name="password"  className="form-control" value={this.state.password} onChange={(event) => this.handleChange(event)} placeholder="Password"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="text-center">
                            <a onClick={() => this.submitLogin()} class="btn btn-fill btn-primary">Login</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="password text-center">
                        <Link to="/admin/forget">Forget Your Password?</Link>
                      </div>
                    </div>
              
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;