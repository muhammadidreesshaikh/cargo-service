import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import fire from '../core/Firebase.js';

class AllService extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getService();
  }

  getService = () => {
    let tempLservice = [];
    const serviceRef = fire.database().ref('services');

    serviceRef.on('value', (snapshot) => {
      const service = snapshot.val();

      for (let id in service) {
        tempLservice.push({ id, ...service[id] });
      }
      this.setState({ data: tempLservice});
    });
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="All Service Type"
                // category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={ 
                  <Table striped hover> 
                    <thead>
                      <tr>
                      <th>ID</th>
                       <th>Service Type</th>
                       <th>Service Price</th>
                       <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        this.state.data.map((item, key) => {
                          return(
                            <tr key={key}>
                              <td>{item.id}</td>
                              <td>{item.service_type}</td>
                              <td>{item.service_price}</td>
                              <td className="press">
                                <Link to={{ pathname: "/admin/create-service", data : item }} class="btn btn-fill btn-primary">Edit</Link>
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

export default AllService;