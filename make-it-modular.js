const myModule = require('./mymodule.js')

myModule(process.argv[2], process.argv[3], function (err, content) {
    if (err) {
        return console.error('There was an error:', err);
      } else {
          content.forEach(file => {
              console.log(file)
            })
        }
});

