import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdea } from '../actions'

class IdeasShow extends Component {

  componentWillMount() {
    console.log("props", this.props)
    this.props.fetchIdea(this.props.match.params.id)
  }

  render() {
    const { idea } = this.props
    if (!idea) return <div>Loading...</div>
    return (
      <div>
        <h3>{ idea.title }</h3>
        <p>{ idea.description }</p>
        <p>{ idea.created_at }</p>
        <p>{ idea.user.name }</p>
      </div>
    )
  }

}

function mapStateToProps( { ideas }, ownProps ) {
  return { idea: ideas[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchIdea })(IdeasShow)