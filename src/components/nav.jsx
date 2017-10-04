import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from 'react-md/lib/Toolbars/Toolbar'
import { connect } from 'react-redux'
import Button from 'react-md/lib/Buttons'
import NavMain from './nav_main'
import MenuButton from 'react-md/lib/Menus/MenuButton';
import FontIcon from 'react-md/lib/FontIcons';
import { List, ListItem } from 'react-md/lib/Lists';


class Nav extends React.Component {


  render(){

    let actions

    if( !this.props.user.id ) {
      actions = [
        <Link to='/login'><Button icon>account_circle</Button></Link>
      ]
    } else {
      actions = [
        <MenuButton
          id="vert-menu"
          flat
          secondary
          buttonChildren="menu"


        >
          <List className="md-cell md-paper md-paper--1">
            <Link to='/dashabord'><ListItem primaryText="Dashboard" /></Link>
            <Link to='/ideas/new'><ListItem primaryText="New Idea" /></Link>
          </List>

        </MenuButton>
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
