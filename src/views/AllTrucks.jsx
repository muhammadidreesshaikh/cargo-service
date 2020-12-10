import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AllTrucks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getTruck();
  }

  getTruck = () => {
    let tempLtruck = [];
    const truckRef = fire.database().ref('trucks');

    truckRef.on('value', (snapshot) => {
      const truck = snapshot.val();

      for (let id in truck) {
        tempLtruck.push({ id, ...truck[id] });
      }
      this.setState({ data: tempLtruck });
    });
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="All Trucks" 
                // category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                       <th>Number Plate</th>
                       <th>Location</th>
                       <th>Route From</th>
                       <th>Route To</th>
                       <th>Booking</th>
                       <th>Assign Staff</th>
                       <th>Status</th>
                       <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      { 
                        this.state.data.map((item, key) => {
                          return(
                            <tr key={key}>
                              <td>{item.number_plate}</td>
                              <td>{item.location}</td>
                              <td>{item.route_from}</td>
                              <td>{item.route_to}</td>
                              <td>{item.booking}</td>
                              <td>{item.assign_staff}</td>
                              <td>{item.status}</td>
                              <td className="press">
                                <Link to={{ pathname: "/admin/register-truck", data : item }} class="btn btn-fill btn-primary">Edit</Link>
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

export default AllTrucks;