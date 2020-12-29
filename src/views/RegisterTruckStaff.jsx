import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class RegisterTruckStaff extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.location.data,
      name: '',
      email: '',
      password: '',
      id_card: '',
      driving_license: '',
      contact: '',
      status: '',
    }
  }

  componentDidMount() {
    console.log(this.state.data);
    if(this.state.data) {
      this.setState({
        name: this.state.data.name,
        email: this.state.data.email,
        password: this.state.data.password,
        id_card: this.state.data.id_card,
        driving_license: this.state.data.driving_license,
        contact: this.state.data.contact,
        status: this.state.data.status,
      })
    }
  }

  createTruckStaff = () => {
    const truckStaffsRef = fire.database().ref('users');
  
    const truckStaffs = {
      name: this.state.name,
      email: this.state.email,
      // password: this.state.password,
      id_card: this.state.id_card,
      driving_license: this.state.driving_license,
      contact: this.state.contact,
      status: this.state.status,
      user_type: 'truck-staff'
    };

    truckStaffsRef.push(truckStaffs, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      } 
    });

    this.signupForCustomer(this.state.email, this.state.password);
    this.props.history.push('/admin/all-truck-staff');

    console.log(truckStaffs);
  };

  // creating default account for customer
  signupForCustomer = (email, password) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        console.log(res);
        if (res.additionalUserInfo.isNewUser == true) alert('Signup Successfull.');
        else alert('Signup Failed!');
    })
    .catch(error => {
        console.log(error);
    })
  }

  updateLoad = () => {
    fire.database().ref('truck-staff/' + this.state.data.id).set({
      name: this.state.name,
      id_card: this.state.id_card,
      driving_license: this.state.driving_license,
      contact: this.state.contact,
      status: this.state.status
      }, function(error) {
        if (error) {
            alert("Truck Staffs Updation Failed.");
        } else {
          alert("Truck Staffs Updated Successfully.");
        }
      }); 
  
      this.props.history.push('/admin/all-truck-staffs');
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
                title="Register Truck Staff"
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
                            <input name="email" type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
                          </div>
                        </div>

                        {
                          this.state.data ?
                          null
                          :
                          <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                              <label>Password</label>
                              <input name="password" type="text" class="form-control" placeholder="Password" value={this.state.password} onChange={(event) => this.handleChange(event)}/>
                            </div>
                          </div>
                        }

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>ID Card</label>
                                <input name="id_card" type="text" class="form-control" placeholder="ID Card" value={this.state.id_card} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Driving License</label>
                                <input name="driving_license" type="text" class="form-control" placeholder="Driving License" value={this.state.driving_license} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Contact</label>
                                <input name="contact" type="number" class="form-control" placeholder="Contact" value={this.state.contact} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div> 

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Status</label>
                                <select name="status" class="form-control" value={this.state.status} onChange={(event) => this.handleChange(event)}>
                                  <option value="approve">Approve</option>
                                  <option value="block">Block</option>
                                  <option value="unblock">UnBlock</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="text-center">
                              {
                                this.state.data ?
                                <a onClick={() => this.updateLoad()} className="btn btn-primary btn-fill">Update</a>
                                :
                                <a onClick={() => this.createTruckStaff()} class="btn btn-fill btn-primary">Add</a>
                              }
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

export default RegisterTruckStaff;