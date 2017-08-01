import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/nav.jsx';
import IdeasIndex from './components/ideas_index.jsx';
import About from './components/about.jsx';
import Footer from './components/footer.jsx';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={IdeasIndex} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)

