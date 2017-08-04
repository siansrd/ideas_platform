import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdeasByUser } from '../actions'
import { deleteIdea } from '../actions'
import _ from 'lodash'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import Button from 'react-md/lib/Buttons'


class UserDashbaord extends Component {

  constructor(props) {
    super(props)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchIdeasByUser(this.props.user.id)
  }

  onDeleteClick(id) {
    this.props.deleteIdea(id, () => {
      this.props.fetchIdeasByUser(this.props.user.id)
    })
  }


  renderIdeas() {

    const { ideasByUser } = this.props
    if ( ideasByUser && ideasByUser.length === 0) {
      return <p>You have no ideas</p>
    }
    return _.map(ideasByUser, (idea) => {
      return (
        <Card raise={ true } key={idea.id}>
          <CardTitle title={idea.title} />
          <p className="md-card-text">{idea.summary}</p>
          <p className="md-card-text">{idea.description}</p>
          <div className="md-card-text" ><Button 
          icon primary 
          onClick={ () => { this.onDeleteClick(idea.id) }}
          >delete</Button></div>
        </Card>
      )
    }) 
  }

  render() {
    return (
      <div>
        <h2>UserDashbaord</h2>
        <h3>My ideas</h3>
        <div className="col s10" >
          {this.renderIdeas()}
        </div>
      </div>
    )
  }

}

function mapStateToProps( { ideasByUser, user } ) {
  return { ideasByUser, user }
}

export default connect(mapStateToProps, { fetchIdeasByUser, deleteIdea })(UserDashbaord)