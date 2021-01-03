import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AllStaffs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getStaff();
  }

  getStaff = () => {
    let tempLstaff = [];
    const staffRef = fire.database().ref('users');

    staffRef.on('value', (snapshot) => {
      const staff = snapshot.val();

      for (let id in staff) {
        tempLstaff.push({ id, ...staff[id] });
      }

      let filtered = tempLstaff.filter(item => item.user_type == 'collection-staff');

      this.setState({ data: filtered });
    });
  };

  deleteStaff = (id) => {
    const staffRef = fire.database().ref('users').child(id);
    staffRef.remove();
    this.getStaff();
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="All Staffs"
                // category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover> 
                    <thead>
                      <tr>
                      <th>ID</th>
                       <th>Name</th>
                       <th>Email</th>
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
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.contact}</td>
                              <td>{item.status}</td>
                              <td className="press">
                              <Link to={{ pathname: "/admin/add-staff", data : item }} class="btn btn-fill btn-primary">Edit</Link>
                                <a type="button" class="btn btn-fill btn-danger pl-3" onClick={() => this.deleteStaff(item.id)}>Delete</a>
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

export default AllStaffs;