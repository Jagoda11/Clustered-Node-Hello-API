const http = require('http');
const cluster = require('cluster');
const os = require('os');

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

function serverHand(req, res) {
  req.url = req.url;
  if (req.url === '/hello-again') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ message: 'well:  /hello-again' }));
  } else {
    res.write('Hello to you too!');
  }
  res.end();
}

//master thread
if (cluster.isMaster) {
  http.createServer(serverHandler).listen(3000);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  http.createServer(serverHand).listen(3001);
  //if not on master thread,add something here
  // add something here
}
