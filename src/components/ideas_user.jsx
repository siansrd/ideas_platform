import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIdeasByUser } from '../actions'
import { deleteIdea } from '../actions'
import _ from 'lodash'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import Button from 'react-md/lib/Buttons'
import { prettyDate } from '../helpers/formatter'
import { Link } from 'react-router-dom'


class UserIdeas extends Component {

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

        <div className="col s10" key={ idea.id }>
          <Link to={`/ideas/${ idea.id }`}>
            <Card raise={ true }>
              <CardTitle title={ idea.title } />
              <p className="md-card-text">{ idea.summary }</p>
              <p className="md-card-text">Votes: { idea.votes } | { prettyDate(idea.created_at) }</p>
              <div className="md-card-text" >
                <Button
                  icon primary
                  onClick={ () => { this.onDeleteClick(idea.id) }}
                >delete</Button></div>
            </Card>
          </Link>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="content-body">
        <div className="row">
          <h2>My Ideas</h2>
          {this.renderIdeas()}
        </div>
      </div>
    )
  }

}

function mapStateToProps( { ideasByUser, user } ) {
  return { ideasByUser, user }
}

export default connect(mapStateToProps, { fetchIdeasByUser, deleteIdea })(UserIdeas)
