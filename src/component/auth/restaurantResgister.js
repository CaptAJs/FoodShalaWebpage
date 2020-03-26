import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";
import { Redirect } from "react-router-dom";

import config from "../../config";

class RestaurantRegister extends Component {
  state = {
    name: "",
    email: "",
    location: "",
    password: "",
    user_type: "1",
    phone_number: "",
    is_veg: "False",
    redirect: false,
    errors: {}
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    //let status;
    const newUser = {
      restaurant_name: this.state.name,
      restaurant_location: this.state.location,
      email_id: this.state.email,
      password: this.state.password,
      user_type: this.state.user_type,
      phone_number: this.state.phone_number
    };
    console.log(newUser);
    axios
      .post(config.sign_up, newUser)
      .then(res => {
        localStorage.setItem("token", res.data.data.auth_token);
        localStorage.setItem("user_type", this.state.user_type);
        this.setState({ redirect: true });
      })
      .catch(err => console.log(err.response));
  };
  render() {
    const errors = this.state.errors;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/add_item" />;
    }
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Restaurant Sign Up</h1>
              <p className="lead text-center">
                Create account and Start Selling Your Delicious Food...
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Restaurant Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />

                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.location
                    })}
                    placeholder="Restaurant location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                  />

                  {errors.location && (
                    <div className="invalid-feedback">{errors.location}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.phone_number
                    })}
                    placeholder="Phone Number"
                    name="phone_number"
                    value={this.state.phone_number}
                    onChange={this.onChange}
                  />
                  {errors.phone_number && (
                    <div className="invalid-feedback">
                      {errors.phone_number}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantRegister;
