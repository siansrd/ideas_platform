import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import UI from './containers/ui.jsx';
import List from './containers/list.jsx';
import About from './components/about.jsx';
import RequestHelper from './helpers/requestHelper.js';

const url = 'http://localhost:3000/api/entries';

window.onload = () => {
  RequestHelper.getEntries(url);
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={UI}>
        <IndexRoute component={List} />
        <Route path="list" component={List} />
        <Route path="about" component={About} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
}