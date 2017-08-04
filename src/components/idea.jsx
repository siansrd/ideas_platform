import React, { Component } from 'react'
import Chip from 'react-md/lib/Chips'
import Button from 'react-md/lib/Buttons'
import { updateIdea } from '../actions'
import { connect } from 'react-redux'
import { prettyDate } from '../helpers/formatter'

class Idea extends Component {

  handleVoteClick(){
    const { idea } = this.props
    const votes = idea.votes + 1
    this.props.updateIdea( idea.id, { votes })
  }

  render() {
    const { idea } = this.props

    return (
      <div className="col s6">
        <h3>{ idea.title }</h3>
        <p>Votes: { idea.votes } | { prettyDate(idea.created_at) } | { idea.user.name }</p>
        <p>{ idea.description }</p>
        <Chip label={ idea.category.name } />
        <Button icon primary onClick={ this.handleVoteClick.bind(this) }>thumb_up</Button>
      </div>
    )
  }

}

export default connect( null, { updateIdea } )(Idea)