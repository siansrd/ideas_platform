import React from 'react'
import MenuButton from 'react-md/lib/Menus/MenuButton';
import { List, ListItem } from 'react-md/lib/Lists';
import { Link } from 'react-router-dom'

const NavUser = () => {
  return (
    <MenuButton id="vert-menu" flat secondary buttonChildren="menu">
      <List>
        <Link to='/dashboard'><ListItem primaryText="Dashboard" /></Link>
        <Link to='/ideas/new'><ListItem primaryText="New Idea" /></Link>
        <Link to="/my-ideas"><ListItem primaryText="My Ideas" /></Link>
      </List>
    </MenuButton>
  )
}

export default NavUser
