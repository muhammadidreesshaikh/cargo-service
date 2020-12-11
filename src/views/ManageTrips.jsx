import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class ManageTrips extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getTrip();
  }

  getTrip = () => {
    let tempLtrip = [];
    const tripRef = fire.database().ref('trips');

    tripRef.on('value', (snapshot) => {
      const trip = snapshot.val();

      for (let id in trip) {
        tempLtrip.push({ id, ...trip[id] });
      }
      this.setState({ data: tempLtrip });
    });
  };

  deleteTrip = (id) => {
    const tripRef = fire.database().ref('trips').child(id);
    tripRef.remove();
    this.getTrip();
  };

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
                       <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        this.state.data.map((item, key) => {
                          return(
                            <tr key={key}>
                              <td>{item.select_truck}</td>
                              <td>{item.route_from}</td>
                              <td>{item.route_to}</td>
                              <td>{item.date_from}</td>
                              <td>{item.date_to}</td>
                              <td>{item.date_time}</td>
                              <td>Awais will work</td>
                              <td className="press">
                                <Link to={{ pathname: "/admin/create-trip", data : item }} class="btn btn-fill btn-primary">Edit</Link>
                                <a type="button" class="btn btn-fill btn-danger pl-3" onClick={() => this.deleteTrip(item.id)}>Delete</a>
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

export default ManageTrips;
