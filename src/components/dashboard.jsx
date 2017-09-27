import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  render() {
    return (
      <div>
        <div className="content-body">
          <h2>Dashboard</h2>
          <p>Some stats about ideas</p>
          <Link to='/ideas'>You ideas</Link>
        </div>
      </div>
    )
  }

}

export default Dashboard
