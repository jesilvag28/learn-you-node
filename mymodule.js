const fs = require('fs');
const path = require('path');

module.exports = function (dirName, fileNames, callback) {
    fs.readdir(dirName, function(err, content) {
        if (err) {
            return callback(err);
        } else {
            content = content.filter( file => { return path.extname(file) === '.' + fileNames
            })
            callback(null, content)
        }
    })
}
