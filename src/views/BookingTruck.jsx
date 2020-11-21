import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";

class RegisterTruck extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Booking Truck"
                // category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                    <Table striped hover>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Truck ID</th>
                            <th>Cargo Company</th>
                            <th>Booking Date</th>
                            <th>Capacity</th>
                            <th>Shipping Route</th>
                            <th>Status</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>KFL-021</td>
                                <td>John</td>
                                <td>02-10-2015</td>
                                <td>8 Ton</td>
                                <td>Lahore</td>
                                <td>Approve</td>
                                <td className="press">
                                <Link to="/admin/create-truck-booking" class="btn btn-fill btn-primary">Edit</Link>
                                <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>002</td>
                                <td>UYL-302</td>
                                <td>Semth</td>
                                <td>19-06-2018</td>
                                <td>5 Ton</td>
                                <td>Multan</td>
                                <td>Approve</td>
                                <td className="press">
                                <Link to="/admin/create-truck-booking" class="btn btn-fill btn-primary">Edit</Link>
                                <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>003</td>
                                <td>AWB-997</td>
                                <td>Rony</td>
                                <td>22-06-2016</td>
                                <td>4 Ton</td>
                                <td>Punjab</td>
                                <td>Reject</td>
                                <td className="press">
                                <Link to="/admin/create-truck-booking" class="btn btn-fill btn-primary">Edit</Link>
                                <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <td>004</td>
                                <td>QWS-881</td>
                                <td>Jolandy</td>
                                <td>20-02-2020</td>
                                <td>10 Ton</td>
                                <td>Karachi</td>
                                <td>Approve</td>
                                <td className="press">
                                <Link to="/admin/create-truck-booking" class="btn btn-fill btn-primary">Edit</Link>
                                <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                  </Table>
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