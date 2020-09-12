import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutPage from './Components/AboutPage/AboutPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <AboutPage />} />
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
