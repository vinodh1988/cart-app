

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from  'react-router-dom'
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';





class App extends React.Component
{
   
    render(){
    
      return(
        <Router>
        <div>
        <nav className="navbar navbar-expand-sm bg-green navbar-dark">
     
        <Link className="navbar-brand" to="/">Organic Store</Link>
        
    
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Reach us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About us</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
      <Route path="/" exact component={Home} ></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/about" component={About}></Route>
      
      </div>
      
        </div>
        </Router>
      );
}
}


export default App;
