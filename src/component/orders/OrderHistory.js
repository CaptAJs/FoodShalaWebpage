import React, { Component } from "react";
import Axios from "axios";
import FoodDetails from "./FoodDetails";
import { Redirect } from "react-router-dom";
import base64 from "base-64";

export default class OrderHistory extends Component {
  state = {
    restaurantOrders: [],
    redirect: false
  };
  componentDidMount() {
    if (localStorage.token) {
      const link = `http://127.0.0.1:8000/api/order/history?email_id=${
        JSON.parse(base64.decode(localStorage.token)).email_id
      }`;
      Axios.get(link)
        .then(res => {
          console.log(res.data.data.order_history);
          this.setState({
            restaurantOrders: res.data.data.order_history
          });
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    if (localStorage.token) {
      if (JSON.parse(base64.decode(localStorage.token)).user_type !== "1")
        return <Redirect to="/menu" />;
    }
    if (!localStorage.token) return <Redirect to="/menu" />;
    if (this.state.redirect) {
      return <Redirect to="/menu" />;
    }

    const showOrders = this.state.restaurantOrders.map((restaurants, key) => {
      return (
        <FoodDetails
          name={restaurants.customer_details}
          details={restaurants.food_details.order_details}
        />
      );
    });
    console.log(showOrders);
    return (
      <div>
        <h3 className="display-4 mb-4">Your Orders</h3>
        {showOrders}
      </div>
    );
  }
}
