import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Navbar from './components/Navbar';
import Home from "../src/pages/Home";
import Staff from "../src/pages/Staff";

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/staff" component={Staff} />
      </div>
    </Router>
  );
}

export default App;
