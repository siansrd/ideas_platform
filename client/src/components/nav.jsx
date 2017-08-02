import React from 'react';
import About from './about.jsx';
import IdeasIndex from '../components/ideas_index.jsx';
import { Link } from 'react-router-dom'
import Toolbar from 'react-md/lib/Toolbars/Toolbar'

class Nav extends React.Component {

  render(){
    return(
      <div>
        <Toolbar colored={true} >
          <Link to='/'>Ideas Plaform</Link>
          <ul>
            <li className="nav-item"><Link to='/ideas/new'>New Idea</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
          </ul>
        </Toolbar>
      </div>
    )
  }

}

export default Nav;


