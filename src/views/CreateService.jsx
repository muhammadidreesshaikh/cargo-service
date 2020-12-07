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
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg"; 

class CreateService extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.location.data,
      service_type: '',
      service_price: '',
    }
  }

  componentDidMount() {

    if(this.state.data) {
      this.setState({
        service_type: this.state.data.service_type,
        service_price: this.state.data.service_price,
      })
    }
  }

  createService = () => {
    const serviceRef = fire.database().ref('services');
  
    const service = {
      service_type: this.state.service_type,
      service_price: this.state.service_price
    };

    serviceRef.push(service, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      }
    });
          
    this.props.history.push('/admin/all-service');

    console.log(service);
  };

  updateLoad = () => {
    fire.database().ref('services/' + this.state.data.id).set({
      service_type: this.state.service_type,
      service_price: this.state.service_price
      }, function(error) {
        if (error) {
            alert("Services Updation Failed.");
        } else {
          alert("Services Updated Successfully.");
        }
      }); 
  
      this.props.history.push('/admin/all-service');
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
                title="Create Service Type"
                content={
                    <form> 
                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Service Type</label>
                                <select name="service_type" class="form-control" value={this.state.service_type} onChange={(event) => this.handleChange(event)}>
                                    <option value="standard">Standard</option>
                                    <option value="express">Express</option>
                                    <option value="fast">Fast</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label>Service Price</label>
                                <input name="service_price" type="number" class="form-control" placeholder="Service Price" value={this.state.service_price} onChange={(event) => this.handleChange(event)}/>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="text-center">
                              {
                                this.state.data ?
                                <a onClick={() => this.updateLoad()} className="btn btn-primary btn-fill">Update</a>
                                :
                                <button onClick={() => this.createService()} type="button" class="btn btn-fill btn-primary">Add</button>
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

export default CreateService;
