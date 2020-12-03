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
                              <th>Date From</th>
                              <th>Route From</th>
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
                                  <td>{item.date_from}</td>
                                  <td>{item.route_from}</td>
                                  <td>Awais will work</td>
                                  <td>{item.status}</td>
                                  <td className="press">
                                    <Link to={{ pathname: "/admin/create-truck-booking", data : item }} class="btn btn-fill btn-primary">Edit</Link>
                                    <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                                  </td>
                                </tr>
                              )
                            })
                          }
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