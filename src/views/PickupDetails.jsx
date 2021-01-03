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

class PickupDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.location.data,
            cargo: '',
            assign: '',
            collection: '',
            date: '',
            cargo_company: '',
            to: '',
            from: '',
            pickup_address: '',
            dropoff_address: '',
            pickup_contact: '',
            dropoff_contact: '',
            assign_center: '',
            assign_staff: '',
            description: '',
            cost_estimation: '',
            pickup_type: '',
            status: '',
        }
    }

    componentDidMount() {
        this.getCargoCompany();
        this.getStaff();
        this.getCollectionCentre();
    
        if(this.state.data) {
          this.setState({
            cargo_company: this.state.data.cargo_company,
            date: this.state.data.date,
            to: this.state.data.to,
            from: this.state.data.from,
            pickup_address: this.state.data.pickup_address,
            dropoff_address: this.state.data.dropoff_address,
            pickup_contact: this.state.pickup_contact,
            dropoff_contact: this.state.data.dropoff_contact,
            assign_center: this.state.assign_center,
            assign_staff: this.state.assign_staff,
            description: this.state.data.description,
            cost_estimation: this.state.data.cost_estimation,
            pickup_type: this.state.data.pickup_type,
            status: this.state.data.status,
          })
        }
    }

    createDetails = () => {
        const detailsRef = fire.database().ref('pickup-request');
        
        const details = {
            cargo_company: this.state.cargo_company,
            date: this.state.date,
            to: this.state.to,
            from: this.state.from,
            pickup_address: this.state.pickup_address,
            dropoff_address: this.state.dropoff_address,
            pickup_contact: this.state.pickup_contact,
            dropoff_contact: this.state.dropoff_contact,
            assign_center: this.state.assign_center,
            assign_staff: this.state.assign_staff,
            description: this.state.description,
            cost_estimation: this.state.cost_estimation,
            pickup_type: this.state.pickup_type,
            status: this.state.status
        };
    
        detailsRef.push(details, function(error) {
            if (error) {
            alert("Data could not be saved." + error);
            } else {
            alert("Data saved successfully.");
            } 
        });
    
        this.props.history.push('/admin/all-pickup-request'); 

        console.log(details);
    };

    updateLoad = () => {
        fire.database().ref('pickup-request/' + this.state.data.id).set({
            cargo_company: this.state.cargo_company,
            date: this.state.date,
            to: this.state.to,
            from: this.state.from,
            pickup_address: this.state.pickup_address,
            dropoff_address: this.state.dropoff_address,
            pickup_contact: this.state.pickup_contact,
            dropoff_contact: this.state.dropoff_contact,
            assign_center: this.state.assign_center,
            assign_staff: this.state.assign_staff,
            description: this.state.description,
            cost_estimation: this.state.cost_estimation,
            pickup_type: this.state.pickup_type,
            status: this.state.status
          }, function(error) {
            if (error) {
                alert("Pickup-Details Updation Failed.");
            } else {
              alert("Pickup-Details Successfully.");
            }
          }); 
      
          this.props.history.push('/admin/all-pickup-request');
    };

    getCargoCompany = () => {
        let tempLcargo = [];
        const cargoRef = fire.database().ref('users');
    
        cargoRef.on('value', (snapshot) => {
          const cargo = snapshot.val();
    
          for (let id in cargo) {
            tempLcargo.push({ id, ...cargo[id] });
          }
          
          let filtered = tempLcargo.filter(item => item.user_type == 'cargo');
    
          this.setState({ cargo: filtered });
        });
    }; 

    getStaff = () => {
        let tempLuser = [];
        const userRef = fire.database().ref('users');

        userRef.on('value', (snapshot) => {
            const user = snapshot.val();

            for (let id in user) {
                tempLuser.push({ id, ...user[id] });
            }
            
            let filtered = tempLuser.filter(item => item.user_type == 'truck-staff');

            this.setState({ assign: filtered });
        });
    };

    getCollectionCentre = () => {
        let tempLuser = [];
        const userRef = fire.database().ref('users');

        userRef.on('value', (snapshot) => {
            const user = snapshot.val();

            for (let id in user) {
                tempLuser.push({ id, ...user[id] });
            }
            
            let filtered = tempLuser.filter(item => item.user_type == 'collection');

            this.setState({ collection: filtered });
        });
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
                title="Pickup Details"
                content={ 
                    <form>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Date</label>
                                <input name="date" type="date" class="form-control" placeholder="Date" value={this.state.date} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Cargo Company</label>
                                <select name="cargo_company" class="form-control" value={this.state.cargo_company} onChange={(event) => this.handleChange(event)}>
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

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>To</label>
                                <input name="to" type="to" class="form-control" placeholder="To" value={this.state.to} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>From</label>
                                <input name="from" type="from" class="form-control" placeholder="From" value={this.state.from} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Pickup Address</label>
                                <input name="pickup_address" type="address" class="form-control" placeholder="Address" value={this.state.pickup_address} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Dropoff Address</label>
                                <input name="dropoff_address" type="address" class="form-control" placeholder="Address" value={this.state.dropoff_address} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Pickup Contact</label>
                                <input name="pickup_contact" type="contact" class="form-control" placeholder="Contact" value={this.state.pickup_contact} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Dropoff Contact</label>
                                <input name="dropoff_contact" type="contact" class="form-control" placeholder="Contact" value={this.state.dropoff_contact} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Assign Center</label>
                                <select name="assign_center" class="form-control" value={this.state.assign_center} onChange={(event) => this.handleChange(event)}>
                                    { 
                                        this.state.collection && this.state.collection.map((item, key) => {
                                        return(
                                            <option key={key}>{item.name}</option>                            
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Assign Staff</label>
                                <select name="assign_staff" class="form-control" value={this.state.assign_staff} onChange={(event) => this.handleChange(event)}>
                                    { 
                                        this.state.assign && this.state.assign.map((item, key) => {
                                        return(
                                            <option key={key}>{item.name}</option>                            
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Description</label>
                                <input name="description" type="text" class="form-control" placeholder="Description" value={this.state.description} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Cost Estimation</label>
                                <input name="cost_estimation" type="number" class="form-control" placeholder="Cost Estimation" value={this.state.cost_estimation} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Pickup Type</label>
                                <select name="pickup_type" class="form-control" value={this.state.pickup_type} onChange={(event) => this.handleChange(event)}>
                                    <option>Outgoing</option>
                                    <option>Incoming</option>
                                    <option>Registered</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Status</label>
                                <select name="status" class="form-control" value={this.state.status} onChange={(event) => this.handleChange(event)}>
                                    <option value="processing">Processing</option>
                                    <option value="estimated">Estimated</option>
                                    <option value="pickuped">Pickuped</option>
                                    <option value="delivered">Delivered</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="text-center">
                                <button onClick={() => this.createDetails()} type="button" class="btn btn-fill btn-primary">Notify To Person</button>
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

export default PickupDetails;
