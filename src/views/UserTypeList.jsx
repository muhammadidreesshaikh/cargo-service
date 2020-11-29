import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class UserTypeList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    let tempLuserList = [];
    const userListRef = fire.database().ref('users');

    userListRef.on('value', (snapshot) => {
      const userList = snapshot.val();

      for (let id in userList) {
        tempLuserList.push({ id, ...userList[id] });
      }
      this.setState({ data: tempLuserList });
    });
  };

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
                       <th>Name</th>
                       <th>Email</th>
                       <th>Password</th>
                       {/* <th>Commission Percentage</th> */}
                       <th>Cargo Company</th>
                       <th>User Type</th>
                       {/* <th>Cargo Selected</th> */}
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
                              <td>{item.email}</td>
                              <td>{item.password}</td>
                              {/* <td>{item.commission_percentage}</td> */}
                              <td>{item.cargo_company}</td>
                              <td>{item.user_type}</td>
                              {/* <td>{item.cargo_selected}</td> */}
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

export default UserTypeList;
