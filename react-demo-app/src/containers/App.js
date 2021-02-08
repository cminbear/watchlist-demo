import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Watchlist from "../components/Watchlist/Watchlist";
import Security from "../components/Security/Security";
import Architecture from "../components/Architecture/Architecture";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="content">
              <Route exact path="/" component={Watchlist} />
              <Route exact path="/security/:id" component={Security} />
              <Route exact path="/architecture" component={Architecture} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
