import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AddSupervisor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getSupervisor();
  }

  getSupervisor = () => {
    let tempLsupervisor = [];
    const supervisorRef = fire.database().ref('users');

    supervisorRef.on('value', (snapshot) => {
      const supervisor = snapshot.val();

      for (let id in supervisor) {
        tempLsupervisor.push({ id, ...supervisor[id] });
      }

      let filtered = tempLsupervisor.filter(item => item.user_type == 'supervisor');

      this.setState({ data: filtered });
    });
  };

  deleteSupervisor = (id) => {
    const supervisorRef = fire.database().ref('supervisors').child(id);
    supervisorRef.remove();
    this.getSupervisor();
  };

  render() {
    return ( 
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add Supervisor"
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
                                <Link to={{ pathname: "/admin/add-supervisor", data : item }} class="btn btn-fill btn-primary">Edit</Link>
                                <a type="button" class="btn btn-fill btn-danger pl-3" onClick={() => this.deleteSupervisor(item.id)}>Delete</a>
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

export default AddSupervisor;