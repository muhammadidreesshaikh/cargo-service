import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";

class AllPickup extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="All Pickup Request"
                // category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                      <th>ID</th>
                       <th>Date</th>
                       <th>To</th>
                       <th>From</th>
                       <th>Pickup Contact</th>
                       <th>Dropoff Contact</th>
                       <th>Assigned Center</th>
                       <th>Assigned Staff</th>
                       <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001</td>
                        <td>02-05-2018</td>
                        <td>john</td>
                        <td>agzy</td>
                        <td>+92 333 7148980</td>
                        <td>+92 333 7148980</td>
                        <td className="stop-point"> 
                            <p>Center 1</p>
                            <p>Center 5</p>
                            <p>Center 3</p>
                        </td>
                        <td className="stop-point"> 
                            <p>Staff 3</p>
                            <p>Staff 2</p>
                            <p>Staff 7</p>
                        </td>
                        <td className="press">
                          <Link to="/admin/pickup-details" class="btn btn-fill btn-primary">Edit</Link>
                          <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>002</td>
                        <td>18-06-2020</td>
                        <td>semth</td>
                        <td>romi</td>
                        <td>+92 333 7148980</td>
                        <td>+92 333 7148980</td>
                        <td className="stop-point"> 
                            <p>Center 3</p>
                            <p>Center 2</p>
                            <p>Center 5</p>
                        </td>
                        <td className="stop-point"> 
                            <p>Center 6</p>
                            <p>Center 3</p>
                            <p>Center 1</p>
                        </td>
                        <td className="press">
                          <Link to="/admin/pickup-details" class="btn btn-fill btn-primary">Edit</Link>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>003</td>
                        <td>22-03-2015</td>
                        <td>rony</td>
                        <td>calie</td>
                        <td>+92 333 7148980</td>
                        <td>+92 333 7148980</td>
                        <td className="stop-point"> 
                            <p>Center 8</p>
                            <p>Center 2</p>
                            <p>Center 5</p>
                        </td>
                        <td className="stop-point"> 
                            <p>Center 2</p>
                            <p>Center 4</p>
                            <p>Center 6</p>
                        </td>
                        <td className="press">
                          <Link to="/admin/pickup-details" class="btn btn-fill btn-primary">Edit</Link>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>004</td>
                        <td>10-09-2019</td>
                        <td>jolandy</td>
                        <td>horny</td>
                        <td>+92 333 7148980</td>
                        <td>+92 333 7148980</td>
                        <td className="stop-point"> 
                            <p>Center 3</p>
                            <p>Center 2</p>
                            <p>Center 6</p>
                        </td>
                        <td className="stop-point"> 
                            <p>Center 8</p>
                            <p>Center 5</p>
                            <p>Center 7</p>
                        </td>
                        <td className="press">
                          <Link to="/admin/pickup-details" class="btn btn-fill btn-primary">Edit</Link>
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

export default AllPickup;