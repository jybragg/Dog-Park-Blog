import React from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './pages/Home';
import Login from './components/Login';
import AddPost from "./pages/AddPost";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <Nav />
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/addpost" component={AddPost} />
        <Route path="/account" component={Account} />
        <Route path="/delete" component={Account} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
