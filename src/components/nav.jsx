import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from 'react-md/lib/Toolbars/Toolbar'


class Nav extends React.Component {

  render(){

    const nav = <Link to='/'>Home</Link>
    const actions = [
      <Link to='/login'>Login</Link>, 
      <Link to='/dashboard'>Dashboard</Link>, 
      <Link to='/ideas/new'>New Idea</Link>, 
      <Link to='/about'>About</Link> 
    ]

    return(
        <Toolbar
          className="main-nav"
          nav={nav} 
          actions={actions} 
        />
    )
  }

}

export default Nav;


