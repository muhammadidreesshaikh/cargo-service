import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AllPickupRequest extends Component {

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
    const truckRef = fire.database().ref('pickup-request');

    truckRef.on('value', (snapshot) => {
      const truck = snapshot.val();

      for (let id in truck) {
        tempLtruck.push({ id, ...truck[id] });
      }
      this.setState({ data: tempLtruck }); 
    });
  };

  deleteTruck = (id) => {
    const truckRef = fire.database().ref('pickup-request').child(id);
    truckRef.remove(); 
    this.getTruck();
  };

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
                       {/* <th>Dropoff Contact</th> */}
                       <th>Assigned Center</th>
                       <th>Assigned Staff</th>
                       <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      { 
                        this.state.data.map((item, key) => {
                          return(
                            <tr key={key}>
                              <td>{item.id}</td>
                              <td>{item.date}</td>
                              <td>{item.to}</td>
                              <td>{item.from}</td>
                              <td>{item.pickup_contact}</td>
                              {/* <td>{item.dropoff_contact}</td> */}
                              <td>{item.assign_center}</td>
                              <td>{item.assign_staff}</td>
                              <td>{item.status}</td>
                              <td className="press">
                                <Link to={{ pathname: "/admin/pickup-details", data : item }} class="btn btn-fill btn-primary">Edit</Link>
                                <a type="button" class="btn btn-fill btn-danger pl-3" onClick={() => this.deleteTruck(item.id)}>Delete</a>
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

export default AllPickupRequest;