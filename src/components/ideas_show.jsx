import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdea } from '../actions'
import CommentsContainer from './comments_container'
import Idea from './idea'

class IdeasShow extends Component {

  componentDidMount() {
    this.props.fetchIdea(this.props.match.params.id)
  }

  render() {
    if (!this.props.idea) return <p>Loading</p>
    const { idea } = this.props
    if (!idea) return <div>Loading...</div>
    return (
      <div className="content-body">
        <div className="row">
          <Idea idea={idea} />
          <CommentsContainer idea={idea} />
        </div>
      </div>
    )
  }

}

function mapStateToProps( { ideas }, ownProps ) {
  return { idea: ideas[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchIdea })(IdeasShow)