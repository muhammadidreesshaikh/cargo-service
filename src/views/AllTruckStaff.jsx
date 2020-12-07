import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AllTruckStaff extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getTruckStaff();
  }

  getTruckStaff = () => {
    let tempLtruckStaff = [];
    const truckStaffRef = fire.database().ref('truck-staff');

    truckStaffRef.on('value', (snapshot) => {
      const truckStaff = snapshot.val();

      for (let id in truckStaff) {
        tempLtruckStaff.push({ id, ...truckStaff[id] });
      }
      this.setState({ data: tempLtruckStaff });
    });
  };

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
                       <th>Name</th>
                       <th>ID Card</th>
                       <th>Driving License</th>
                       <th>Contact</th>
                       <th>Status</th>
                       <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        this.state.data.map((item, key) => {
                          return(
                            <tr key={key}>
                              <td>{item.name}</td>
                              <td>{item.id_card}</td>
                              <td>{item.driving_license}</td>
                              <td>{item.contact}</td>
                              <td>{item.status}</td>
                              <td className="press">
                                <Link to={{ pathname: "/admin/sample", data : item }} class="btn btn-fill btn-primary">Edit</Link>
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

export default AllTruckStaff;
