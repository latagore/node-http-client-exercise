let https = require('https');

function getHTML(options, cb) {

  /* Add your code here */
  
  https.get(requestOptions, function (response) {
    let output = "";
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      output += data;
    });
    
    response.on('end', function (data) {
      cb(output);
    });
  });
}

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, console.log);