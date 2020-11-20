import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
// import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";

class AllTruckStaff extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="All Truck Staff"
                // category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                    <Table striped hover>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>ID Card</th>
                            <th>Driving License</th>
                            <th>Contact</th>
                            <th>Status</th>
                            <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>John</td>
                                <td>7683-9878-4232</td>
                                <td>Truck</td>
                                <td>+92 333 7148980</td>
                                <td>Approve</td>
                                <td className="press">
                                {/* <Link to="/admin/add-user" class="btn btn-fill btn-primary">Update</Link> */}
                                <button type="button" class="btn btn-fill btn-primary pl-3">Update</button>
                                <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Semth</td>
                                <td>9878-4232-7683</td>
                                <td>Tampo</td>
                                <td>+92 333 7148980</td>
                                <td>Approve</td>
                                <td className="press">
                                    <button type="button" class="btn btn-fill btn-primary pl-3">Update</button>
                                <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td>Rony</td>
                                <td>9878-7683-4232</td>
                                <td>Bus</td>
                                <td>+92 333 7148980</td>
                                <td>Reject</td>
                                <td className="press">
                                    <button type="button" class="btn btn-fill btn-primary pl-3">Update</button>
                                <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>004</td>
                                <td>Jolandy</td>
                                <td>7683-908-2354</td>
                                <td>Truck</td>
                                <td>+92 333 7148980</td>
                                <td>Approve</td>
                                <td className="press">
                                    <button type="button" class="btn btn-fill btn-primary pl-3">Update</button>
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

export default AllTruckStaff;