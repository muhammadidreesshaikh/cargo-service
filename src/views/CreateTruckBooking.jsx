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

class CreateTruckBooking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.location.data,
            select_truck: '',
            capacity: '',
            date_from: '',
            date_to: '',
            route_from: '',
            route_to: '',
            status: '',

            // checkbox
            center_1: false,
            center_2: false,
            center_3: false,
            center_4: false,
            center_5: false,
            center_6: false,
            center_7: false,
            center_8: false,
        }
    } 

    componentDidMount() {
        // console.log(this.state.data)

        if(this.state.data) {
          this.setState({
            select_truck: this.state.data.select_truck,
            capacity: this.state.data.capacity,
            date_from: this.state.data.date_from,
            date_to: this.state.data.date_to,
            route_from: this.state.data.route_from,
            route_to: this.state.data.route_to,
            status: this.state.data.status,
          })
        }
    }

    createCreateTruckBooking = () => {
        const createTruckBookingRef = fire.database().ref('bookings');
        
        const createTruckBooking = {
            select_truck: this.state.select_truck,
            capacity: this.state.capacity,
            date_from: this.state.date_from,
            date_to: this.state.date_to,
            route_from: this.state.route_from,
            route_to: this.state.route_to,
            status: this.state.status,

            // checkbox
            center_1: this.state.center_1,
            center_2: this.state.center_2,
            center_3: this.state.center_3,
            center_4: this.state.center_4,
            center_5: this.state.center_5,
            center_6: this.state.center_6,
            center_7: this.state.center_7,
            center_8: this.state.center_8,
        };

        // console.log(createTruckBooking);

        createTruckBookingRef.push(createTruckBooking, function(error) {
            if (error) {
            alert("Data could not be saved." + error);
            } else {
            alert("Data saved successfully.");
            }
        });

        this.props.history.push('/admin/booking-truck');

        console.log(createTruckBooking); 
    };

    updateLoad = () => {
        fire.database().ref('bookings/' + this.state.data.id).set({
            select_truck: this.state.data.select_truck,
            capacity: this.state.data.capacity,
            date_from: this.state.data.date_from,
            date_to: this.state.data.date_to,
            route_from: this.state.data.route_from,
            route_to: this.state.data.route_to,
            status: this.state.data.status
          }, function(error) {
            if (error) {
                alert("Bookings Updation Failed.");
            } else {
              alert("Bookings Updated Successfully.");
            }
          }); 
      
          this.props.history.push('/admin/booking-truck');
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
                title="Create Truck Booking"
                content={
                    <form>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Select Truck</label>
                                <select name="select_truck" class="form-control" value={this.state.select_truck} onChange={(event) => this.handleChange(event)}>
                                    <option>Truck KND-435</option>
                                    <option>Truck QSW-991</option>
                                    <option>Truck AWF-573</option>
                                    <option>Truck GQA-755</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Capacity</label>
                                <input name="capacity" type="text" class="form-control" placeholder="Capacity" value={this.state.capacity} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Date From</label>
                                <input name="date_from" type="date" class="form-control" placeholder="Date From" value={this.state.date_from} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Date To</label>
                                <input name="date_to" type="date" class="form-control" placeholder="Date To" value={this.state.date_to} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Route From</label>
                                <input name="route_from" type="text" class="form-control" placeholder="Route From" value={this.state.route_from} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Route To</label>
                                <input name="route_to" type="text" class="form-control" placeholder="Route To" value={this.state.route_to} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Status</label>
                                <select  name="status" class="form-control" value={this.state.status} onChange={(event) => this.handleChange(event)}>
                                    <option value="approve">Approve</option>
                                    <option value="block">Block</option>
                                    <option value="unblock">UnBlock</option>
                                </select> 
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="stop-points">
                                <h6>Stop Points / Centers</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="main-check justify-content-center">
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input name="center_1" type="checkbox" class="form-check-input" value={this.state.center_1} onChange={(event) => this.handleChange(event)}/>
                                            <label class="form-check-label">Center 1</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input name="center_2" type="checkbox" class="form-check-input" value={this.state.center_2} onChange={(event) => this.handleChange(event)}/>
                                            <label class="form-check-label">Center 2</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input name="center_3" type="checkbox" class="form-check-input" value={this.state.center_3} onChange={(event) => this.handleChange(event)}/>
                                            <label class="form-check-label">Center 3</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input name="center_4" type="checkbox" class="form-check-input" value={this.state.center_4} onChange={(event) => this.handleChange(event)}/>
                                            <label class="form-check-label">Center 4</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input name="center_5" type="checkbox" class="form-check-input" value={this.state.center_5} onChange={(event) => this.handleChange(event)}/>
                                            <label class="form-check-label">Center 5</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input name="center_6" type="checkbox" class="form-check-input" value={this.state.center_6} onChange={(event) => this.handleChange(event)}/>
                                            <label class="form-check-label">Center 6</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input name="center_7" type="checkbox" class="form-check-input" value={this.state.center_7} onChange={(event) => this.handleChange(event)}/>
                                            <label class="form-check-label">Center 7</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input name="center_8" type="checkbox" class="form-check-input" value={this.state.center_8} onChange={(event) => this.handleChange(event)}/>
                                            <label class="form-check-label">Center 8</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="text-center">
                                {
                                    this.state.data ?
                                    <a onClick={() => this.updateLoad()} className="btn btn-primary btn-fill">Update</a>
                                    :
                                    <button onClick={() => this.createCreateTruckBooking()} type="button" class="btn btn-fill btn-primary">Add</button>
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

export default CreateTruckBooking;