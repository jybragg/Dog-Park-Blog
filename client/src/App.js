import React from 'react';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './pages/Home';
import Login from './components/Login';
import AddPost from "./pages/AddPost";
import Account from "./pages/Account";
import Treats from './pages/Treats';
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/addpost" component={AddPost} />
        <Route path="/account" component={Account} />
        <Route path="/post" component={Post} />
        <Route path="/treats" component={Treats} />
        {/* <Route path="/delete" component={Delete} /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
