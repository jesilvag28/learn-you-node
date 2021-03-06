const http = require('http');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { console.log (rawData = chunk) });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});