import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'
// import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import UI from './containers/ui.jsx';
import List from './containers/list.jsx';
import About from './components/about.jsx';

window.onload = () => {
  ReactDOM.render(
    <HashRouter history={hashHistory}>
      <div>
        <Route path="/" component={UI}/>
        <Route exact path="/"component={List} />
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>,
    document.getElementById('app')
  )
}