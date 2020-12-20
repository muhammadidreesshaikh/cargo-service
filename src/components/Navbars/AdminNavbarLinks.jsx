import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import fire from '../../core/Firebase.js';

class AdminNavbarLinks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logout: '',
    }
  }

  logout = () => {
    fire.auth().signOut().then(res => {
      console.log(res);
      localStorage.clear();
      window.location.href = '/admin/login';
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
        </Nav>

        <Nav pullRight>
          <NavItem eventKey={3} onClick={this.logout}>
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
