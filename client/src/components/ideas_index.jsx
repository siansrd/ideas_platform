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
    return _.map(this.props.ideas, (idea) => {
      return (
        <Card className="md-cell" key={idea.id}>
          <Link to={`/ideas/${idea.id}`}>
            <CardTitle title={idea.title} />
          </Link>
          <p>{idea.summary}</p>
        </Card>
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