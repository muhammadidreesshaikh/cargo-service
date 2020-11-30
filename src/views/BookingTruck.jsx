import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class RegisterTruck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getBooking();
  }

  getBooking = () => {
    let tempLbooking = [];
    const bookingRef = fire.database().ref('bookings');

    bookingRef.on('value', (snapshot) => {
      const booking = snapshot.val();

      for (let id in booking) {
        tempLbooking.push({ id, ...booking[id] });
      }
      this.setState({ data: tempLbooking });
    });
  };

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
                              <th>Select Truck</th>
                              <th>Capacity</th>
                              <th>Day From</th>
                              <th>Route From</th>
                              <th>Booking Date</th>
                              <th>Stop Points</th>
                              <th>Status</th>
                              <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {
                            this.state.data.map((item, key) => {
                              return(
                                  <tr key={key}>
                                  <td>{item.select_truck}</td>
                                  <td>{item.capacity}</td>
                                  <td>{item.day_from}</td>
                                  <td>{item.route_from}</td>
                                  <td>{item.stop_points}</td>
                                  <td>{item.status}</td>
                                  <td className="press">
                                    <Link to="/admin/create-truck-booking" class="btn btn-fill btn-primary">Edit</Link>
                                    <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>

                        {/* <tbody>
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
                        </tbody> */}
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