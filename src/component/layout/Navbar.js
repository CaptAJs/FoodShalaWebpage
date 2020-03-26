import React, { Component } from "react";
import { Link } from "react-router-dom";
import base64 from "base-64";

let isAuthenticate = false;
if (localStorage.token) {
  isAuthenticate = JSON.parse(base64.decode(localStorage.token));
}
class Navbar extends Component {
  state = {
    login: false
  };

  onLogoutClick = e => {
    localStorage.removeItem("token");
    localStorage.removeItem("order");
    localStorage.removeItem("user_type");
  };

  render() {
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/login" onClick={this.onLogoutClick} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Foodshala
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  {" "}
                  Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add_item">
                  {" "}
                  Add Item
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Orders">
                  {" "}
                  Orders
                </Link>
              </li>
            </ul>
            {isAuthenticate ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
