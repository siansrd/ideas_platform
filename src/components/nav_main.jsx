import React from 'react'
import Button from 'react-md/lib/Buttons'
import { Link } from 'react-router-dom'

const NavMain = () => {
  return (
    <div>
      <Link to='/'><Button icon>lightbulb_outline</Button></Link>
      <Link to='/ideas'>All Ideas</Link>
    </div>
  )
}

export default NavMain
