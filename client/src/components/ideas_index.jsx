import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchIdeas } from '../actions'
import { Link } from 'react-router-dom'

class IdeasIndex extends React.Component {

  componentDidMount(){
    this.props.fetchIdeas()
  }

  renderIdeas(){
    return _.map(this.props.ideas, (idea) => {
      return (
        <Link to={`/ideas/${idea.id}`} key={idea.id}>
          <li>{idea.title}</li>
        </Link>
      )
    }) 
  }

  render(){
    return (
      <div>
        <h2>Ideas</h2>
        <div id='entry-list'>{this.renderIdeas()}</div>
      </div>
    )
  }

}

function mapStateToProps( state ) {
  return { ideas: state.ideas }
}

export default connect(mapStateToProps, { fetchIdeas } )(IdeasIndex)