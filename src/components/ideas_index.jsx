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
    return _.map(this.props.ideas, (idea, index) => {
      return (
        <div className="col s10 idea" key={idea.id}>
          <Link to={`/ideas/${idea.id}`}>
            <h2>{idea.title}</h2>
          </Link>
          <p>{idea.summary}</p>
          <p>Votes: {idea.votes}</p>
        </div>
      )
    }) 
  }

  render(){
    return (
      <div>
        <h2>Ideas</h2>
        <div className="row">
          {this.renderIdeas()}
        </div>
      </div>
    )
  }

}

function mapStateToProps( state ) {
  return { ideas: state.ideas }
}

export default connect(mapStateToProps, { fetchIdeas } )(IdeasIndex)