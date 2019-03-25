import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" className="my-link">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="my-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="my-link">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* Content */}
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
