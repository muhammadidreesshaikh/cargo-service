import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cargo_company: '',
      user_type: '',
      contact: '',
      status: '',
    }
  }

  componentDidMount() {
    this.getProfile();

  }

  getProfile = () => {
    const status = JSON.parse(localStorage.getItem('profile'));

    this.setState({
      name: status.name,
      email: status.email,
      cargo_company: status.cargo_company,
      user_type: status.user_type,
      contact: status.contact,
      status: status.status,
    })
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }


  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="form-group">
                            <label>Name</label>
                            <input name="name"  type="name" class="form-control" placeholder="Name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="form-group">
                            <label>Email</label>
                            <input name="email" type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="form-group">
                            <label>Cargo Company</label>
                            <input name="cargo_company" type="text" class="form-control" placeholder="Cargo Company" value={this.state.cargo_company} onChange={(event) => this.handleChange(event)}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="form-group">
                            <label>User Type</label>
                            <input name="user_type" type="text" class="form-control" placeholder="Email" value={this.state.user_type} onChange={(event) => this.handleChange(event)}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="form-group">
                            <label>Contact</label>
                            <input name="contact" type="number" class="form-control" placeholder="Contact" value={this.state.contact} onChange={(event) => this.handleChange(event)}/>
                        </div>
                    </div> 

                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="form-group">
                            <label>Status</label>
                            <select name="status" class="form-control" value={this.state.status} onChange={(event) => this.handleChange(event)}>
                              <option value="approve">Approve</option>
                              <option value="block">Block</option>
                              <option value="unblock">UnBlock</option>
                            </select>
                        </div>
                    </div>

                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
