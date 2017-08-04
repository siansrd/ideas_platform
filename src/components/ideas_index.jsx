import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchIdeas } from '../actions'
import { Link } from 'react-router-dom'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import { prettyDate } from '../helpers/formatter'
import Tabs from 'react-md/lib/Tabs/Tabs'
import Tab from 'react-md/lib/Tabs/Tab'
import TabsContainer from 'react-md/lib/Tabs/TabsContainer'
import UserIdeas from './user_ideas'

class IdeasIndex extends React.Component {

  componentDidMount(){
    this.props.fetchIdeas()
  }

  renderIdeas(){

    return _.map(this.props.ideas, (idea, index) => {
      return (
        <div className="col s10" key={ idea.id }>
          <Link to={`/ideas/${ idea.id }`}>
            <Card raise={ true }>
              <CardTitle title={ idea.title } />
              <p className="md-card-text">{ idea.summary }</p>
              <p className="md-card-text">Votes: { idea.votes } | { prettyDate(idea.created_at) } | { idea.user.name }</p>
            </Card>
          </Link>
        </div>
      )
    }) 
  }

  render(){
    if (!this.props.user.id) {
      console.log("no user")
      return (
        <div>
          <h2>Ideas</h2>
          <div className="row">
            {this.renderIdeas()}
          </div>
        </div>
      )
    } else {
      return (
        <TabsContainer panelClassName="md-grid" colored>
          <Tabs tabId="tab">
            <Tab label="All Ideas">
              <div className="row">
                {this.renderIdeas()}
              </div>
            </Tab>
            <Tab label="My Ideas">
              <div className="row">
                <UserIdeas />
              </div>
            </Tab>
          </Tabs>
        </TabsContainer> 
      )
    }
  }

}

function mapStateToProps( state ) {
  return { ideas: state.ideas, user: state.user }
}

export default connect(mapStateToProps, { fetchIdeas } )(IdeasIndex)