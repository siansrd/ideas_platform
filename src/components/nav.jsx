import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from 'react-md/lib/Toolbars/Toolbar'
import { connect } from 'react-redux'
import Button from 'react-md/lib/Buttons'
import NavMain from './nav_main'
import NavUser from './nav_user'


class Nav extends React.Component {


  render(){

    let actions

    if( !this.props.user.id ) {
      actions = [
        <Link to='/login'><Button icon>account_circle</Button></Link>
      ]
    } else {
      actions = [
        <Link to='/ideas/new'><Button icon>add</Button></Link>,
        <NavUser />
      ]
    }

    let userName = ''
    if ( this.props.user ) {
      userName = this.props.user.name
    }

    return(
      <Toolbar
        className="main-nav"
        nav={<NavMain />}
        actions={actions}
      >{ userName }</Toolbar>

    )
  }

}

function mapStateToProps( { user } ){
  return { user }
}

export default connect( mapStateToProps )(Nav);
