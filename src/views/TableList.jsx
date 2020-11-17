import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="User Type List"
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
                       <th>User Type</th>
                       <th>Contact</th>
                       <th>Status</th>
                       <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001</td>
                        <td>John</td>
                        <td>john@email.com</td>
                        <td>Cargo</td>
                        <td>+92 333 7148980</td>
                        <td>Approve</td>
                        <td>
                          <button type="button" class="btn btn-fill btn-primary">Update</button>
                          <button type="button" class="btn btn-fill btn-danger pl-3">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>002</td>
                        <td>Semth</td>
                        <td>semth@email.com</td>
                        <td>Transport</td>
                        <td>+92 333 7148980</td>
                        <td>Approve</td>
                        <td>
                          <button type="button" class="btn btn-fill btn-primary">Update</button>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>003</td>
                        <td>Rony</td>
                        <td>Rony@email.com</td>
                        <td>Cargo</td>
                        <td>+92 333 7148980</td>
                        <td>Reject</td>
                        <td>
                          <button type="button" class="btn btn-fill btn-primary">Update</button>
                          <button type="button" class="btn btn-fill btn-danger">Delete</button>
                        </td>
                      </tr>

                      <tr>
                        <td>004</td>
                        <td>Jolandy</td>
                        <td>jolandy@email.com</td>
                        <td>Transport</td>
                        <td>+92 333 7148980</td>
                        <td>Approve</td>
                        <td>
                          <button type="button" class="btn btn-fill btn-primary">Update</button>
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

export default TableList;
