import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UI     from './containers/ui.jsx';
import List   from './containers/list.jsx';
import About  from './components/about.jsx';
import Footer from './components/footer.jsx';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <UI />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={List} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)

