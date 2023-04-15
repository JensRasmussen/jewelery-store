import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home'
import Store from './Store';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/store">Store</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route exact path="/" element ={<Home/>}/>
          <Route exact path="/about" element ={<About/>}/>
          <Route exact path="/store" element ={<Store/>}/>
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
