import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Footer from "../src/components/Footer";
import Community from "./pages/Community";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/community" component={Community}/>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
