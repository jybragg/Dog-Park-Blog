import React from 'react';
import Nav from "./components/Nav";
// import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
// import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './pages/Home';
import HelloWorld from './components/Blog';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Nav />
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
