import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdeasByUser } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'


class UserDashbaord extends Component {

  componentDidMount() {
    this.props.fetchIdeasByUser(this.props.user.id)
  }


  renderIdeas() {
    return _.map(this.props.ideasByUser, (idea) => {
      return (
        <Card className="md-cell" key={idea.id}>
          <CardTitle title={idea.title} />
          <p>{idea.summary}</p>
          <p>{idea.description}</p>
        </Card>
      )
    }) 
  }



  render() {
    return (
      <div>
        <h2>UserDashbaord</h2>
        <div id='entry-list'>{this.renderIdeas()}</div>
      </div>
    )
  }

}

function mapStateToProps( { ideasByUser, user } ) {
  return { ideasByUser, user }
}

export default connect(mapStateToProps, { fetchIdeasByUser })(UserDashbaord)