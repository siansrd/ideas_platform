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
        <div key={i}>
          <div>{entry.title}</div>
          <div>{entry.content}</div>
          <div>{entry.date}</div>
        </div>
      )
    })
    return formattedEntries;
  }

  render(){
    return (
      <div>
        <p>List</p>
        <div>{this.mapEntries()}</div>
      </div>
    )
  }

}

export default List;