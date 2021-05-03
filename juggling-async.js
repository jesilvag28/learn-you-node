const http = require('http');
const bl = require('bl');

let urls = [];
let responses = [];
let count = 0;

for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

function readResponse(index) {
  http.get(urls[index], function(response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            return console.log(err)
        } else {
            responses[index] = data.toString();
            count++;
        }

      if (count === 3) {
        responses.forEach(function(response) {console.log(response);});
      }
    }));
  });
}

for (let i = 0; i < urls.length; i++) {
  readResponse(i);
}
/*
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
}))
});
*/
