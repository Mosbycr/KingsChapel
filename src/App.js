import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "../src/pages/Home";
import Staff from "../src/pages/Staff";
import History from "../src/pages/History";
import Contact from "../src/pages/Contact";
import Footer from "../src/components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/history" component={History}/>
          <Route exact path="/contact" component={Contact}/>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
