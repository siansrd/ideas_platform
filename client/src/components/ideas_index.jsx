import React from 'react';
import RequestHelper from '../helpers/requestHelper.js';

class IdeasIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      ideas: null
    }
  }

  componentDidMount(){
    const url = 'http://localhost:5000/api/ideas/';
    RequestHelper.getIdeas(url, (data) => {
      this.setState({ideas: data})
    });
  }

  mapIdeas(){
    if (!this.state.ideas) return;
    let formattedIdeas = this.state.ideas.map((idea, i) => { 
      return (
        <div key={i} className='idea-single'>
          <h3 className='idea-title'>{idea.title}</h3>
          <div className='idea-content'>{idea.summary}</div>
          <div>{idea.category.name}</div>
          <div>{idea.created_at}</div>
          <div>{idea.user.name}</div>
        </div>
      )
    })
    return formattedIdeas;
  }

  render(){
    return (
      <div>
        <h2>Ideas</h2>
        <div id='entry-list'>{this.mapIdeas()}</div>
      </div>
    )
  }

}

export default IdeasIndex;