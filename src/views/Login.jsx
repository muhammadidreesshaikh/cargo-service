import React, { Component } from "react";
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
                        <input type="email" class="form-control" placeholder="Email"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="press text-center">
                            <button type="button" class="btn btn-fill btn-primary">Login</button>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="password text-center">
                        <a href="#">Forget Your Password?</a>
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