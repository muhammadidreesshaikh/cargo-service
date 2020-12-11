import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AllTransport extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getTransport();
  }

  getTransport = () => {
    let tempLtransport = [];
    const transportRef = fire.database().ref('users');

    transportRef.on('value', (snapshot) => {
      const transport = snapshot.val();

      for (let id in transport) {
        tempLtransport.push({ id, ...transport[id] });
      }
      
      let filtered = tempLtransport.filter(item => item.user_type == 'transport');

      this.setState({ data: filtered });
    });
  };

  deleteTransport = (id) => {
    const transportRef = fire.database().ref('users').child(id);
    transportRef.remove();
    this.getTransport();
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="All Transport"
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
                                <a type="button" class="btn btn-fill btn-danger pl-3" onClick={() => this.deleteTransport(item.id)}>Delete</a>
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

export default AllTransport;
