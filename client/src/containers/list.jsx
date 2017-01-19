import React from 'react';

class List extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    var url = '/api/entries';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      var data = JSON.parse(request.responseText);
      this.setState({
        {entries: data}
      });
    }.bind(this);
    request.send(null);
  }

  render(){
    console.log(this.state.entries)
    return (
      <div>
        <p>List</p>
      </div>
    )
  }

}

export default List;