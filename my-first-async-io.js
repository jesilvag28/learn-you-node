const fs = require('fs');

const file = process.argv[2];
fs.readFile(file, function(err, content) {
    if (err) {
      console.log(err);
    } else {
        const lines = content.toString().split('\n').length -1;
        console.log(lines)
        }
});