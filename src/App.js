import React, { Component } from 'react';
import './css/bootstrap-4.1.1.min.css';
import './css/app.css';

class Navbar extends Component {
  render() {
    return (
      <div className="col-sm-3 border rounded">
        <h1>Navbar</h1>
        <ul>
          <li><a href="#">Datasets</a></li>
          <li><a href="#">Annotation campaigns</a></li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12"><h1>ODE FrontManager</h1></div>
        </div>
        <div className="row text-center h-100 main">
          <Navbar/>
          <div className="col-sm-9 border rounded"><h1>Data</h1></div>
        </div>
      </div>
    );
  }
}

export default App;
