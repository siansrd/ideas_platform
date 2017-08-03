import React, { Component } from 'react'
import Chip from 'react-md/lib/Chips'
import Button from 'react-md/lib/Buttons'

class Idea extends Component {

  handleVoteClick(){
    const votes = this.props.idea.votes + 1
    console.log(votes)
  }

  render() {
    const { idea } = this.props

    return (
      <div className="col s6">
        <h3>{ idea.title }</h3>
        <p>Votes: { idea.votes } | { idea.created_at } | { idea.user.name }</p>
        <p>{ idea.description }</p>
        <Chip label={ idea.category.name } />
        <Button icon primary onClick={ this.handleVoteClick.bind(this) }>favorite</Button>
      </div>
    )
  }

}

export default Idea