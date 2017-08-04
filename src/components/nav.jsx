import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from 'react-md/lib/Toolbars/Toolbar'
import { connect } from 'react-redux'
import Button from 'react-md/lib/Buttons'


class Nav extends React.Component {


  render(){

    let actions
    const nav = <Link to='/'><Button icon>lightbulb_outline</Button></Link>

    if( !this.props.user.id ) {
      actions = [
        <Link to='/about'>About</Link>,
        <Link to='/login'><Button icon>account_circle</Button></Link>
      ]
    } else {
      actions = [
        <Link to='/dashboard'>Dashboard</Link>, 
        <Link to='/about'>About</Link> ,
        <Link to='/ideas/new'><Button icon>add_circle</Button></Link>
      ]
    }

    let userName = ''
    if ( this.props.user ) {
      userName = this.props.user.name
    }

    return(
        <Toolbar
          className="main-nav"
          nav={nav} 
          actions={actions} 
        >{ userName }</Toolbar>

    )
  }

}

function mapStateToProps( { user } ){
  return { user }
}

export default connect( mapStateToProps )(Nav);


