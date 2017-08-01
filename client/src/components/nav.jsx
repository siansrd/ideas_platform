import React from 'react';
import About from './about.jsx';
import IdeasIndex from '../components/ideas_index.jsx';
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  render(){
    return(
      <div>
        <header>
          <h1>ideas_platform</h1>
          <nav id="nav-main">
            <ul className="nav-list">
              <li className="nav-item"><Link to='/ideas/new'>New Idea</Link></li>
              <li className="nav-item"><Link to='/'>Home</Link></li>
              <li className="nav-item"><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }

}

export default Nav;


