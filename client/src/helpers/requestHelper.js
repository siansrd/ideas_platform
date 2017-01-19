import Entry from '../models/entry.js';

const RequestHelper = {

  getEntries: function(url, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      var data = JSON.parse(request.responseText);
      callback(data)
    }
    request.send(null);
  }
}

export default RequestHelper;