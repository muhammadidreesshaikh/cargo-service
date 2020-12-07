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

class AddStaff extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.location.data,
      name: '',
      email: '',
      contact: '',
      status: '',
    }
  }

  componentDidMount() {


    if(this.state.data) {
      this.setState({
        name: this.state.data.name,
        email: this.state.data.email,
        contact: this.state.data.contact,
        status: this.state.data.status,
      })
    }
  }

  createStaff = () => {
    const staffRef = fire.database().ref('staffs');
  
    const staff = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      status: this.state.status,
    };

    staffRef.push(staff, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      }
    });

    this.props.history.push('/admin/all-staffs');

    console.log(staff);
  };

  updateLoad = () => {
    fire.database().ref('staffs/' + this.state.data.id).set({
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      status: this.state.status
      }, function(error) {
        if (error) {
            alert("Staffs Updation Failed.");
        } else {
          alert("Staffs Updated Successfully.");
        }
      }); 
  
      this.props.history.push('/admin/all-staffs');
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
                title="Add Staff"
                content={
                    <form>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Name</label>
                                <input name="name"  type="name" class="form-control" placeholder="Name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Email</label>
                                <input name="email" type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
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
                                <button onClick={() => this.createStaff()} type="button" class="btn btn-fill btn-primary">Add</button>
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

export default AddStaff;
