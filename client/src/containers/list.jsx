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

  // mapEntries(){
  //   this.state.entries.map(entry => {
  //     console.log(entry)
  //   })
  // }

  render(){
    return (
      <div>
        <p>List</p>
      </div>
    )
  }

}

export default List;