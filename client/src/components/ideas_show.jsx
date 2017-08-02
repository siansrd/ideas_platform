import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdea } from '../actions'
import Chip from 'react-md/lib/Chips'
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';

class IdeasShow extends Component {

  componentDidMount() {
    this.props.fetchIdea(this.props.match.params.id)
  }

  renderComments() {
    const { idea } = this.props
    if (!idea.comments || idea.comments.length === 0) return <ListItem primaryText="Be the first to comment" />
    return idea.comments.map((comment) => {
      return ( 
        <div className="comment" key={comment.id}> 
          <blockquote>
            <p>{comment.text}</p>
            <p>{comment.user.name}</p>
          </blockquote>
        </div>
      )
    })
  }

  render() {
    const { idea } = this.props
    if (!idea) return <div>Loading...</div>
    return (
      <div className="row">
        <div className="col s6">
          <h3>{ idea.title }</h3>
          <p>{ idea.description }</p>
          <p>{ idea.created_at }</p>
          <p>{ idea.user.name }</p>
          <Chip label={ idea.category.name } />
        </div>
        <div className="col s6">
          <h4>Comments</h4>
          <div className="comments">
            {this.renderComments()}
          </div>
        </div>

      </div>
    )
  }

}

function mapStateToProps( { ideas }, ownProps ) {
  return { idea: ideas[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchIdea })(IdeasShow)