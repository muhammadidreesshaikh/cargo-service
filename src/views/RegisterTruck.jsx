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

class RegisterTruck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.location.data,
      assign: '',
      number_plate: '',
      location: '',
      route_from: '',
      route_to: '',
      booking: '',
      assign_staff: '',
      status: '',
    }
  }

  componentDidMount() {
    this.getTruck();

    if(this.state.data) {
      this.setState({
        number_plate: this.state.data.number_plate,
        location: this.state.data.location,
        route_from: this.state.data.route_from,
        route_to: this.state.data.route_to,
        booking: this.state.data.booking,
        assign_staff: this.state.assign_staff,
        status: this.state.data.status,
      })
    }
  }

  createTruck = () => {
    const truckRef = fire.database().ref('trucks');
  
    const truck = {
      number_plate: this.state.number_plate,
      location: this.state.location,
      route_from: this.state.route_from,
      route_to: this.state.route_to,
      booking: this.state.booking,
      assign_staff: this.state.assign_staff,
      status: this.state.status
    };

    truckRef.push(truck, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      } 
    });

    this.props.history.push('/admin/all-trucks');

    console.log(truck);
  };

  updateLoad = () => {
    fire.database().ref('trucks/' + this.state.data.id).set({
      number_plate: this.state.number_plate,
      location: this.state.location,
      route_from: this.state.route_from,
      route_to: this.state.route_to,
      booking: this.state.booking,
      assign_staff: this.state.assign_staff,
      status: this.state.status
      }, function(error) {
        if (error) {
            alert("Trucks Updation Failed.");
        } else {
          alert("Trucks Updated Successfully.");
        }
      }); 
  
      this.props.history.push('/admin/all-trucks');
  };

  getTruck = () => {
    let tempLtruck = [];
    const truckRef = fire.database().ref('truck-staff');

    truckRef.on('value', (snapshot) => {
      const truck = snapshot.val();

      for (let id in truck) {
        tempLtruck.push({ id, ...truck[id] });
      }
      this.setState({ assign: tempLtruck });
    });

    console.log(this.state.assign);
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
                title="Register Truck"
                content={
                    <form>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Number Plate</label>
                                <input name="number_plate" type="text" class="form-control" placeholder="Number Plate" value={this.state.number_plate} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Location</label>
                                <input name="location" type="location" class="form-control" placeholder="Location" value={this.state.location} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Route From</label>
                                <input name="route_from" type="route" class="form-control" placeholder="Route From" value={this.state.route_from} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Route To</label>
                                <input name="route_to" type="route" class="form-control" placeholder="Route To" value={this.state.route_to} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div> 

                        <div className="col-12 col-md-4 col-lg-4">
                            <div class="form-group">
                                <label>Booking</label>
                                <input name="booking" type="number" class="form-control" placeholder="Booking" value={this.state.booking} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4">
                            <div class="form-group">
                                <label>Assign Staff</label>
                                <select name="assign_staff" class="form-control" value={this.state.assign_staff} onChange={(event) => this.handleChange(event)}>
                                  { 
                                    this.state.assign && this.state.assign.map((item, key) => {
                                      return(
                                      <option key={key}>{item.name}</option>                            
                                      )
                                    })
                                  }
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4">
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
                                <button onClick={() => this.createTruck()} type="button" class="btn btn-fill btn-primary">Add</button>
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

export default RegisterTruck;