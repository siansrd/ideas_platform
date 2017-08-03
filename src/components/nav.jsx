import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from 'react-md/lib/Toolbars/Toolbar'
import { fetchUSer } from '../actions'
import { connect } from 'react-redux'


class Nav extends React.Component {


  render(){

    let actions
    const nav = <Link to='/'>Home</Link>

    if( !this.props.user.id ) {
      actions = [
        <Link to='/login'>Log In</Link>, 
        <Link to='/about'>About</Link> 
      ]
    } else {
      actions = [
        <Link to='/dashboard'>Dashboard</Link>, 
        <Link to='/ideas/new'>New Idea</Link>, 
        <Link to='/about'>About</Link> 
      ]
    }

    return(
        <Toolbar
          className="main-nav"
          nav={nav} 
          actions={actions} 
        />
    )
  }

}

function mapStateToProps( { user } ){
  return { user }
}

export default connect( mapStateToProps )(Nav);


