const http = require('http');

const base = new URL(process.env.BASE_URL || 'http://127.0.0.1:3010');

http.get({
  hostname: base.hostname,
  port: base.port,
  path: '/api/health'
}, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error('Smoke test failed: bad status', res.statusCode);
      process.exit(1);
    }
    const parsed = JSON.parse(body);
    if (!parsed.ok) {
      console.error('Smoke test failed: ok=false');
      process.exit(1);
    }
    console.log('Smoke test passed.');
  });
}).on('error', (error) => {
  console.error('Smoke test failed:', error.message);
  process.exit(1);
});
