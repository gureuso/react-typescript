import React from 'react';
import $ from 'jquery';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from 'pages/home';
import About from 'pages/about';

import 'static/css/style.less';

class App extends React.Component {
  componentDidMount() {
    $('h1').click(() => {
      alert('hello world!!!');
    });
  }
  
  render() {
    return (
      <Router>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
