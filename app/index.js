const http = require('http');

function serverHandler(req, res) {
  req.url = req.url;
  if (req.url === '/hello') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ message: 'welcome to /hello' }));
  } else {
    res.write('Hello World!');
  }
  res.end();
}

http.createServer(serverHandler).listen(3000);
