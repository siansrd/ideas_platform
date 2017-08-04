import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchIdeas } from '../actions'
import { Link } from 'react-router-dom'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'

class IdeasIndex extends React.Component {

  componentDidMount(){
    this.props.fetchIdeas()
  }

  renderIdeas(){
    return _.map(this.props.ideas, (idea, index) => {
      return (
        <div className="col s10" key={idea.id}>
          <Link to={`/ideas/${idea.id}`}>
            <Card raise={ true }>
              <CardTitle title={ idea.title } />
              <p className="md-card-text">{idea.summary}</p>
              <p className="md-card-text">Votes: {idea.votes}</p>
            </Card>
          </Link>
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