import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AllCenter extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: [],
  //   }
  // }

  // getCenters = () => {
  //   let tempLallCenter = [];
  //   const allCenterRef = fire.database().ref('centers');

  //   allCenterRef.on('value', (snapshot) => {
  //     const allCenter = snapshot.val();

  //     for (let id in allCenter) {
  //       tempLallCenter.push({ id, ...allCenter[id] });
  //     }
  //     this.setState({ data: tempLallCenter });
  //   });

  // };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row> 
            <Col md={12}>
              <Card
                title="All Center"
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

                    {/* <tbody>
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
                                <Link to="/admin/add-user" class="btn btn-fill btn-primary">Edit</Link>
                                <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody> */}

                    <tbody>
                      <tr>
                        <td>001</td>
                        <td>John</td>
                        <td>john@email.com</td>
                        <td>+92 333 7148980</td>
                        <td>Approve</td>
                        <td className="press">
                          <Link to="/admin/add-user" class="btn btn-fill btn-primary">Edit</Link>
                          <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>002</td>
                        <td>Semth</td>
                        <td>semth@email.com</td>
                        <td>+92 333 7148980</td>
                        <td>Approve</td>
                        <td className="press">
                          <Link to="/admin/add-user" class="btn btn-fill btn-primary">Edit</Link>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>003</td>
                        <td>Rony</td>
                        <td>Rony@email.com</td>
                        <td>+92 333 7148980</td>
                        <td>Reject</td>
                        <td className="press">
                          <Link to="/admin/add-user" class="btn btn-fill btn-primary">Edit</Link>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>004</td>
                        <td>Jolandy</td>
                        <td>jolandy@email.com</td>
                        <td>+92 333 7148980</td>
                        <td>Approve</td>
                        <td className="press">
                          <Link to="/admin/add-user" class="btn btn-fill btn-primary">Edit</Link>
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

export default AllCenter;
