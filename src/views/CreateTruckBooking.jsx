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

class CreateTruckBooking extends Component {
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
                                <select class="form-control">
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
                                <input type="text" class="form-control" placeholder="Capacity"/>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Date From</label>
                                <input type="date" class="form-control" placeholder="Date From"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Date To</label>
                                <input type="date" class="form-control" placeholder="Date To"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Route From</label>
                                <input type="text" class="form-control" placeholder="Route From"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Route To</label>
                                <input type="text" class="form-control" placeholder="Route To"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Status</label>
                                <select class="form-control">
                                    <option>Approve</option>
                                    <option>Block</option>
                                    <option>UnBlock</option>
                                    <option>Default</option>
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
                                            <input type="checkbox" class="form-check-input"/>
                                            <label class="form-check-label">Center 1</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"/>
                                            <label class="form-check-label">Center 2</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"/>
                                            <label class="form-check-label">Center 3</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"/>
                                            <label class="form-check-label">Center 4</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"/>
                                            <label class="form-check-label">Center 5</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"/>
                                            <label class="form-check-label">Center 6</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"/>
                                            <label class="form-check-label">Center 7</label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input"/>
                                            <label class="form-check-label">Center 8</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="text-center">
                                <button type="button" class="btn btn-fill btn-primary">Done</button>
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