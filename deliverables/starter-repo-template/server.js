const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3010);

function send(res, code, body, type) {
  res.writeHead(code, { 'Content-Type': type || 'text/plain; charset=utf-8' });
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/api/health') {
    send(res, 200, JSON.stringify({
      ok: true,
      project: 'starter-repo-template',
      stage: 'bootstrap'
    }), 'application/json; charset=utf-8');
    return;
  }

  if (req.url === '/' || req.url === '/index.html') {
    const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
    send(res, 200, html, 'text/html; charset=utf-8');
    return;
  }

  send(res, 404, 'Not Found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Starter repo running at http://127.0.0.1:${PORT}`);
});
