import React from 'react';
import {Link} from 'react-router';
import About from '../components/about.jsx';
import List from './list.jsx';

class UI extends React.Component {

  render(){
    return(
      <div><h1>Flint</h1>
        <h3><Link to='/about'>About</Link></h3>
        <h3><Link to='/list'>List</Link></h3>
        {this.props.children}
      </div>
    )
  }

}

export default UI;