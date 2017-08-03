import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdea } from '../actions'
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Comment from './comment'
import CommentNew from './comment_new'
import Idea from './idea'

class IdeasShow extends Component {

  componentDidMount() {
    this.props.fetchIdea(this.props.match.params.id)
  }

  renderComments() {
    const { idea } = this.props
    if (!idea.comments || idea.comments.length === 0) return <ListItem primaryText="Be the first to comment" />
    return idea.comments.map((comment) => {
      return ( 
        <Comment comment={comment} />
      )
    })
  }

  render() {
    const { idea } = this.props
    if (!idea) return <div>Loading...</div>
    return (
      <div className="row">
        <Idea idea={idea} />
        <div className="col s6">
          <h4>Comments</h4>
          <div className="comments">
            {this.renderComments()}
          </div>
          <CommentNew ideaId={idea.id} />
        </div>
      </div>
    )
  }

}

function mapStateToProps( { ideas }, ownProps ) {
  return { idea: ideas[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchIdea })(IdeasShow)