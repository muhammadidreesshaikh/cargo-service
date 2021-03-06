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
import fire from '../core/Firebase.js';

class AddUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.location.data,
      cargo: '',
      name: '',
      email: '',
      password: '',
      // commission_percentage: [],
      cargo_company: '',
      user_type: '',
      no_cargo: false,
      contact: '',
      status: '',
    }
  }

  componentDidMount() {
    this.getUser();

    if(this.state.data) {
      this.setState({
        name: this.state.data.name,
        email: this.state.data.email,
        password: this.state.data.password,
        cargo_company: this.state.data.cargo_company,
        user_type: this.state.data.user_type,
        no_cargo: this.state.no_cargo,
        contact: this.state.data.contact,
        status: this.state.data.status,
      })
    }
  }

  createUser = () => {
    const userRef = fire.database().ref('users');
  
    const user = {
      name: this.state.name,
      email: this.state.email,
      // password: this.state.password,
      // commission_percentage: this.state.commission_percentage,
      cargo_company: this.state.cargo_company,
      user_type: this.state.user_type,
      no_cargo: this.state.no_cargo,
      contact: this.state.contact,
      status: this.state.status
    };

    userRef.push(user, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      } 
    });

    this.signupForCustomer(this.state.email, this.state.password);
    this.props.history.push('/admin/user-type-list');
  };

  // creating default account for customer
  signupForCustomer = (email, password) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        console.log(res);
        if (res.additionalUserInfo.isNewUser == true) alert('Signup Successfull.');
        else alert('Signup Failed!');
    })
    .catch(error => {
        console.log(error);
    })
  }

  updateLoad = () => {
    fire.database().ref('users/' + this.state.data.id).set({
      name: this.state.name,
      email: this.state.email,
      // password: this.state.password,
      // commission_percentage: this.state.commission_percentage,
      cargo_company: this.state.cargo_company,
      user_type: this.state.user_type,
      no_cargo: this.state.no_cargo,
      contact: this.state.contact,
      status: this.state.status
      }, function(error) {
        if (error) {
            alert("Users Updation Failed.");
        } else {
          alert("Users Updated Successfully.");
        }
      }); 
  
      this.props.history.push('/admin/user-type-list');
  };

  getUser = () => {
    let tempLuser = [];
    const userRef = fire.database().ref('users');

    userRef.on('value', (snapshot) => {
      const user = snapshot.val();

      for (let id in user) {
        tempLuser.push({ id, ...user[id] });
      }
      
      let filtered = tempLuser.filter(item => item.user_type == 'cargo');

      this.setState({ cargo: filtered });
    });
  }; 

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
 
    if(event.target.name == 'user_type') {
      if(event.target.value == 'collection') {
        this.setState({ no_cargo: true })
      }
      else {
        this.setState({ no_cargo: false })
      }
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add User Type"
                content={
                  <form>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Name</label>
                        <input name="name" type="name" class="form-control" placeholder="Name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input name="email"  type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div>

                    {
                      this.state.data ?
                      null
                      :
                      <div className="col-12 col-md-6 col-lg-6">
                        <div class="form-group">
                          <label>Password</label>
                          <input name="password" type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={(event) => this.handleChange(event)}/>
                        </div>
                      </div>
                    }
                    

                    {/* <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Commission Percentage</label>
                        <input name="commission_percentage" type="number" class="form-control" placeholder="Commission Percentage" value={this.state.commission_percentage} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div> */}

                    <div className="col-12 col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>User Type</label>
                        <select name="user_type" class="form-control" value={this.state.user_type} onChange={(event) => this.handleChange(event)}>
                          <option value="0">Select User Type</option>
                          <option value="cargo">Cargo</option>
                          <option value="customer">Customer</option>
                          <option value="agent">Agent</option>
                          <option value="transport">Transport</option>
                          <option value="collection">Collection</option>
                        </select>
                      </div>
                    </div>

                    {
                      this.state.no_cargo ?
                      <div className="col-12 col-md-6 col-lg-6">
                        <div class="form-group">
                          <label>Cargo Company</label>
                          <select name="cargo_company" class="form-control" value={this.state.cargo_company} onChange={(event) => this.handleChange(event)}>
                            <option value="0">Select Cargo Company</option>
                            {
                              this.state.cargo && this.state.cargo.map((item, key) => {
                                return(
                                  <option key={key}>{item.name}</option>                            
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>
                      :
                      null
                    }
                    
                    <div className="col-12 col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Contact</label>
                        <input name="contact" type="number" class="form-control" placeholder="Contact" value={this.state.contact} onChange={(event) => this.handleChange(event)}/>
                      </div>
                    </div>

                    {/* <div className="col-12 col-md-4 col-lg-4">
                      <div class="form-check main-check">
                          <input name="no_cargo" type="checkbox" class="form-check-input" value={this.state.no_cargo} onChange={(event) => this.handleChange(event)}/>  No Cargo Selected
                      </div>
                    </div> */}

                    <div className="col-12 col-md-6 col-lg-6">
                      <div class="form-group">
                        <label>Status</label>
                        <select name="status" class="form-control" value={this.state.status} onChange={(event) => this.handleChange(event)}>
                          <option value="0">Select Status</option>
                          <option value="approve">Approve</option>
                          <option value="block">Block</option>
                          <option value="unblock">UnBlock</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="press text-center">
                          {
                            this.state.data ?
                            <a onClick={() => this.updateLoad()} className="btn btn-primary btn-fill">Update</a>
                            :
                            <button onClick={() => this.createUser()} type="button" class="btn btn-fill btn-primary">Add</button>
                          }
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

export default AddUser;