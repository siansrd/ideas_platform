import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdeasByUser } from '../actions'
import { deleteIdea } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import Button from 'react-md/lib/Buttons';


class UserDashbaord extends Component {

  constructor(props) {
    super(props)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchIdeasByUser(this.props.user.id)
  }

  onDeleteClick(id) {
    this.props.deleteIdea(id)
  }


  renderIdeas() {
  
    const { ideasByUser } = this.props
    if ( ideasByUser && ideasByUser.length === 0) {
      return <p>You have no ideas</p>
    }
    return _.map(ideasByUser, (idea) => {
      return (
        <Card className="md-cell" key={idea.id}>
          <Button icon primary 
          onClick={ () => { this.onDeleteClick(idea.id) }}
          >X</Button>
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

export default connect(mapStateToProps, { fetchIdeasByUser, deleteIdea })(UserDashbaord)