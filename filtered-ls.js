const fs = require('fs');
const path = require('path');

const files = process.argv[2];
fs.readdir(files, function(err, content) {
    if (err) {
      console.log(err);
    } else {
        content.forEach(file => { 
          if ( path.extname(file) === '.'+process.argv[3]) {
            console.log(file)
          }
        });
        }
});