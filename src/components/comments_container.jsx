import React, { Component } from 'react'
import Comment from './comment'
import CommentNew from './comment_new'
import ListItem from 'react-md/lib/Lists/ListItem'
import { connect } from 'react-redux'

class CommentsContainer extends Component {

  renderComments() {
    const { idea } = this.props
    if (!idea.comments || idea.comments.length === 0) return <ListItem primaryText="Be the first to comment" />
    return idea.comments.map((comment) => {
      return ( 
        <Comment key={comment.id} comment={comment} />
      )
    })
  }

  render() {

    let commentForm = ""
    if( this.props.user.id ) {
      commentForm = <CommentNew ideaId={this.props.idea.id} />
    }

    return (
      <div className="col s6">
        <h4>Comments</h4>
        <div className="comments">
          {this.renderComments()}
        </div>
        { commentForm }
      </div>

    )
  }

}

function mapStateToProps( { user } ){
  return { user }
}

export default connect(mapStateToProps)(CommentsContainer)