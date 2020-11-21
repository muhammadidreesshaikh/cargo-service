import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

class ManageTrips extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Manage Trips"
                // category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                       <th>Truck No.</th>
                       <th>Route From</th>
                       <th>Route To</th>
                       <th>Date From</th>
                       <th>Date To</th>
                       <th>Expected Date-Time</th>
                       <th>Stop Points</th>
                       <th>Status</th>
                       <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>KHQ-435</td>
                        <td>Karachi</td>
                        <td>Lahore</td>
                        <td>02-05-2020</td>
                        <td>20-05-2020</td>
                        <td>12-06-2020 - 02:00-06:30AM</td>
                        <td className="stop-point"> 
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </td>
                        <td>Approve</td>
                        <td className="press">
                          <button type="button" class="btn btn-fill btn-primary">Edit</button>
                          <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>KHQ-435</td>
                        <td>Multan</td>
                        <td>Punjab</td>
                        <td>20-07-2020</td>
                        <td>08-07-2020</td>
                        <td>22-08-2020 - 05:00-09:20PM</td>
                        <td className="stop-point"> 
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </td>
                        <td>Approve</td>
                        <td className="press">
                          <button type="button" class="btn btn-fill btn-primary">Edit</button>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>KHQ-435</td>
                        <td>Punjab</td>
                        <td>Karachi</td>
                        <td>30-10-2020</td>
                        <td>15-10-2020</td>
                        <td>18-05-2020 - 03:20-01:45AM</td>
                        <td className="stop-point"> 
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </td>
                        <td>Reject</td>
                        <td className="press">
                          <button type="button" class="btn btn-fill btn-primary">Edit</button>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>KHQ-435</td>
                        <td>Multan</td>
                        <td>Sukkur</td>
                        <td>18-11-2020</td>
                        <td>22-11-2020</td>
                        <td>18-05-2020 - 06:30-05:00PM</td>
                        <td className="stop-point"> 
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </td>
                        <td>Approve</td>
                        <td className="press">
                          <button type="button" class="btn btn-fill btn-primary">Edit</button>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
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

export default ManageTrips;
