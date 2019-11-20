import React from 'react';
// import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NotFound from './components/NotFound';
// import Home from './pages/Home';
// import Login from './components/Login';
// import AddPost from "./pages/AddPost";
// import Account from "./pages/Account";
// import Treats from './pages/Treats';
// import Post from "./pages/Post";

import Form from "./components/Article/Form";
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Switch>
        <Route exact path="/" component={Form} />
          {/* <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/account" component={Account} />
          <Route path="/post" component={Post} />
          <Route path="/treats" component={Treats} /> */}
          {/* <Route path="/delete" component={Delete} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
        <Footer />
      </Provider>
    </Router>
  )
}

export default App;

//====================================================================//

// import React from 'react';
// import createHistory from 'history/createBrowserHistory';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Route, Switch, Router } from 'react-router-dom';

// import store from './store';
// // import { App1 } from './components';

// import '../resources/scss/style.scss';


// ReactDOM.render(
//   <Router history={createHistory()}>
//     <Provider store={store}>
//       <Switch>
//         {/* <Route path="/" component={App1} /> */}
//       </Switch>
//     </Provider>
//   </Router>,
//   document.getElementById('root'),
// );
