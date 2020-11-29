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
import fire from '../core/Firebase.js';
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class AddUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: [],
      email: [],
      password: [],
      // commission_percentage: [],
      cargo_company: [],
      user_type: [],
      no_cargo: false,
      contact: [],
      status: [],
    }
  }

  createUser = () => {
    const userRef = fire.database().ref('users');
  
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      // commission_percentage: this.state.commission_percentage,
      cargo_company: this.state.cargo_company,
      user_type: this.state.user_type,
      no_cargo: this.state.no_cargo,
      contact: this.state.contact,
      status: this.state.status
    };

    userRef.push(user, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      }
    });

    this.props.history.push('/admin/add-user');

    console.log(user);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

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
                        <input name="name" type="name" class="form-control" placeholder="Name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input name="email"  type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input name="password" type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div>

                    {/* <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Commission Percentage</label>
                        <input name="commission_percentage" type="number" class="form-control" placeholder="Commission Percentage" value={this.state.commission_percentage} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div> */}

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Cargo Company</label>
                        <select name="cargo_company" class="form-control" value={this.state.cargo_company} onChange={(event) => this.handleChange(event)}>
                          <option>TCS</option>
                          <option>Leopard</option>
                          <option>M&P</option>
                          <option>BlueX</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>User Type</label>
                        <select name="user_type" class="form-control" value={this.state.user_type} onChange={(event) => this.handleChange(event)}>
                          <option>Cargo Company</option>
                          <option>Customer Company</option>
                          <option>Agent Company</option>
                          <option>Transport Company</option>
                          <option>Colloection Company</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Contact</label>
                        <input name="contact" type="number" class="form-control" placeholder="Contact" value={this.state.contact} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div>

                    {/* <div className="col-12 col-md-4 col-lg-4">
                      <div class="form-check main-check">
                          <input name="no_cargo" type="checkbox" class="form-check-input" value={this.state.no_cargo} onChange={(event) => this.handleChange(event)}/>  No Cargo Selected
                      </div>
                    </div> */}

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Status</label>
                        <select name="status" class="form-control" value={this.state.status} onChange={(event) => this.handleChange(event)}>
                          <option>Approve</option>
                          <option>Block</option>
                          <option>UnBlock</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="press text-center">
                            <button onClick={() => this.createUser()} type="button" class="btn btn-fill btn-primary">Add</button>
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