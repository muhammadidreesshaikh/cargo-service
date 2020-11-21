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
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class AddUser extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add User Type"
                content={
                  <form>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Name</label>
                        <input type="name" class="form-control" placeholder="Name"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Commission Percentage</label>
                        <input type="number" class="form-control" placeholder="Commission Percentage"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                      <div class="form-group">
                        <label>Cargo Company</label>
                        <select class="form-control">
                          <option>TCS</option>
                          <option>Leopard</option>
                          <option>M&P</option>
                          <option>BlueX</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                      <div class="form-group">
                        <label>User Type</label>
                        <select class="form-control">
                          <option>Cargo Company</option>
                          <option>Customer Company</option>
                          <option>Agent Company</option>
                          <option>Transport Company</option>
                          <option>Colloection Company</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                      <div class="form-check main-check">
                          <input type="checkbox" class="form-check-input"/>
                          <label class="form-check-label">No Cargo Selected</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Contact</label>
                        <input type="number" class="form-control" placeholder="Contact"/>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Status</label>
                        <select class="form-control">
                          <option>Approve</option>
                          <option>Block</option>
                          <option>UnBlock</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="press text-center">
                            <button type="button" class="btn btn-fill btn-primary">Add</button>
                            <button type="button" class="btn btn-fill btn-success">Update</button>
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

export default AddUser;