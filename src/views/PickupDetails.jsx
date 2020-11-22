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

class PickupDetails extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Pickup Details"
                content={
                    <form>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Date</label>
                                <input type="date" class="form-control" placeholder="Date"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Cargo Company</label>
                                <select class="form-control">
                                    <option>ABC Company</option>
                                    <option>EFG Company</option>
                                    <option>Agent Company</option>
                                    <option>MNO Company</option>
                                    <option>XYZ Company</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>To</label>
                                <input type="to" class="form-control" placeholder="To"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>From</label>
                                <input type="from" class="form-control" placeholder="From"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Address</label>
                                <input type="address" class="form-control" placeholder="Address"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Address</label>
                                <input type="address" class="form-control" placeholder="Address"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Contact</label>
                                <input type="contact" class="form-control" placeholder="Contact"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Contact</label>
                                <input type="contact" class="form-control" placeholder="Contact"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Assign To</label>
                                <select class="form-control">
                                    <option>Center 1</option>
                                    <option>Center 2</option>
                                    <option>Center 3</option>
                                    <option>Center 4</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Description</label>
                                <input type="text" class="form-control" placeholder="Description"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Cost Estimation</label>
                                <input type="number" class="form-control" placeholder="Cost Estimation"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Pickup Type</label>
                                <select class="form-control">
                                    <option>Outgoing</option>
                                    <option>Incoming</option>
                                    <option>Registered</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Status</label>
                                <select class="form-control">
                                    <option>Processing</option>
                                    <option>Estimated</option>
                                    <option>Pickuped</option>
                                    <option>Delivered</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="text-center">
                                <button type="button" class="btn btn-fill btn-primary">Notify To Person</button>
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

export default PickupDetails;
