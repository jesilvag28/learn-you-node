const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(process.argv[3])
    stream.on('data', chunk => res.end(chunk.toString()))
})
server.listen(process.argv[2])