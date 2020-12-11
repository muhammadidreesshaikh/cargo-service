import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AllCargo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getCargo();
  }

  getCargo = () => {
    let tempLcargo = [];
    const cargoRef = fire.database().ref('users');

    cargoRef.on('value', (snapshot) => {
      const cargo = snapshot.val();

      for (let id in cargo) {
        tempLcargo.push({ id, ...cargo[id] });
      }
      
      let filtered = tempLcargo.filter(item => item.user_type == 'cargo');

      this.setState({ data: filtered });
    });
  };

  deleteCargo = (id) => {
    const cargoRef = fire.database().ref('users').child(id);
    cargoRef.remove();
    this.getCargo();
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="All Cargo"
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
                                <Link to={{ pathname: "/admin/add-user", data : item }} class="btn btn-fill btn-primary">Edit</Link>
                                <a type="button" class="btn btn-fill btn-danger pl-3"  onClick={() => this.deleteCargo(item.id)}>Delete</a>
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

export default AllCargo;
