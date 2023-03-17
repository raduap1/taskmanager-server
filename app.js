
const names = require('./names')
const funcs = require('./utils')
require('./persistance/index')

const http = require('http');

const hostname = '0.0.0.0';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  console.log(__dirname);
  console.log(__filename);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



funcs.exampleFunction(names.a)