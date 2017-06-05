var getHTML = require('./httpClient');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, (data) => console.log(data.toLowerCase()));