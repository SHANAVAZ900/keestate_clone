import React from 'react'
import './App.css';
import Header from './Header';
import Home from "./Home"
import Footer from "./Footer"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./About"




function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          {/* About */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        

        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
