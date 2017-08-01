import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import Nav from './components/nav.jsx';
import IdeasIndex from './components/ideas_index.jsx';
import IdeasNew from './components/ideas_new.jsx';
import IdeasShow from './components/ideas_show.jsx'
import About from './components/about.jsx';
import Footer from './components/footer.jsx';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/ideas/new" component={IdeasNew} />
          <Route path="/ideas/:id" component={IdeasShow} />
          <Route path="/about" component={About} />
          <Route path="/" component={IdeasIndex} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

