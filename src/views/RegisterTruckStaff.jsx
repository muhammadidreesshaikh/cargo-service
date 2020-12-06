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

class RegisterTruckStaff extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.location.data,
      name: '',
      id_card: '',
      driving_license: '',
      contact: '',
      status: '',
    }
  }

  componentDidMount() {

    if(this.state.data) {
      this.setState({
        name: this.state.data.name,
        id_card: this.state.data.id_card,
        driving_license: this.state.data.driving_license,
        contact: this.state.data.contact,
        status: this.state.data.status,
      })
    }
  }

  createTruckStaff = () => {
    const truckStaffRef = fire.database().ref('truck-staff');
  
    const truckStaff = {
      name: this.state.name,
      id_card: this.state.id_card,
      driving_license: this.state.driving_license,
      contact: this.state.contact,
      status: this.state.status
    };

    truckStaffRef.push(truckStaff, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      } 
    });

    this.props.history.push('/admin/register-truck-staff');

    console.log(truckStaff);
  };

  updateLoad = () => {
    fire.database().ref('truckStaff/' + this.state.data.id).set({
      name: this.state.name,
      id_card: this.state.id_card,
      driving_license: this.state.driving_license,
      contact: this.state.contact,
      status: this.state.status
      }, function(error) {
        if (error) {
            alert("Truck Staff Updation Failed.");
        } else {
          alert("Truck Staff Updated Successfully.");
        }
      }); 
  
      this.props.history.push('/admin/all-truck-staff');
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
                                <button onClick={() => this.createTruckStaff()} type="button" class="btn btn-fill btn-primary">Add</button>
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