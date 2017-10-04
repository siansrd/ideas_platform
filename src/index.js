import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import IdeaNew from './components/idea_new.jsx';
import IdeasShow from './components/ideas_show.jsx'
import Login from './components/login.jsx'
import Footer from './components/footer.jsx';
import Dashboard from './components/dashboard.jsx'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/ideas/new" component={IdeaNew} />
          <Route path="/ideas/:id" component={IdeasShow} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#content-wrapper')
)
