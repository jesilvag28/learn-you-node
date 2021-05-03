const net = require('net');
const strftime = require('strftime')

const server = net.createServer(function (c) {
    c.end(strftime('%Y-%m-%d %H:%M') + '\n')
})
server.listen(Number(process.argv[2]))