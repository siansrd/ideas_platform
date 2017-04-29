import React from 'react';
import About from '../components/about.jsx';
import List from './list.jsx';
import {Link} from 'react-router-dom'

class UI extends React.Component {

  render(){
    return(
      <div>
        <header>
          <h1>ideas_platform</h1>
          <nav id="nav-main">
            <ul className="nav-list">
              <li className="nav-item"><Link to='/about'>About</Link></li>
              <li className="nav-item"><Link id='nav-item' to='/list'>List</Link></li>
            </ul>
          </nav>
        </header>
        
        <div>
          {this.props.children}
        </div>

        <footer>
          <p>cc 2017</p>
        </footer>
      </div>
    )
  }

}

export default UI;


