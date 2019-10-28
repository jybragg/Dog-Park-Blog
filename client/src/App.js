import React from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
// import Jumbotron from "./components/Jumbotron";
// import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './components/Home';
import HelloWorld from './components/Blog';

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
