import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";
import Login from "./component/auth/Login";
import user_type from "./component/auth/user_type";
import "./App.css";

import AddFoodItems from "./component/restaurant/AddFoodItems";
import Menu from "./component/customer/Menu";
import PlaceOrder from "./component/orders/PlaceOrder";
import OrderHistory from "./component/orders/OrderHistory";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={user_type} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add_item" component={AddFoodItems} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/order" component={PlaceOrder} />
            <Route exact path="/orders" component={OrderHistory} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
