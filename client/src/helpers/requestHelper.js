import Entry from '../models/entry.js';

const RequestHelper = {

  getEntries: function(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      if(request.status === 200) {
        console.log('got the data');
        console.log(request.responseText);
        const sampleEntries = JSON.parse(request.responseText);
        console.log(sampleEntries)
      }
    };
    request.send(null);
  }
}

export default RequestHelper;