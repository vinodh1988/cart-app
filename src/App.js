

import React from 'react';
import './App.css';





class App extends React.Component
{
   
    render(){
    
      return(
        <div>
        <nav class="navbar navbar-expand-sm bg-green navbar-dark">
     
        <a class="navbar-brand" href="#">Organic Store</a>
        
    
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Reach us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About us</a>
          </li>
        </ul>
      </nav>
      
        </div>
      );
}
}


export default App;
