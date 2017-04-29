import React from 'react';
import RequestHelper from '../helpers/requestHelper.js';

class List extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      entries: null
    }
  }

  componentDidMount(){
    const url = '/api/entries';
    RequestHelper.getEntries(url, (data) => {
      this.setState({entries: data})
    });
  }

  mapEntries(){
    if (!this.state.entries) return;
    let formattedEntries = this.state.entries.map((entry, i) => { 
      return (
        <div key={i} className='entry-single'>
          <h3 className='entry-title'>{entry.title}</h3>
          <div className='entry-content'>{entry.content}</div>
          <div className='entry-date'>{entry.date}</div>
        </div>
      )
    })
    return formattedEntries;
  }

  render(){
    return (
      <div>
        <h2>Ideas</h2>
        <div id='entry-list'>{this.mapEntries()}</div>
      </div>
    )
  }

}

export default List;