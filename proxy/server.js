const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://discord.com',
  changeOrigin: true,
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('accept-encoding', 'identity');
  },
  onProxyRes: (proxyRes) => {
    const cspHeaders = [
      'content-security-policy',
      'content-security-policy-report-only',
      'x-content-security-policy',
      'x-webkit-csp'
    ];
    cspHeaders.forEach(h => delete proxyRes.headers[h]);
  }
}));

app.listen(3000, () => {
  console.log('✅ Proxy Discord actif sur http://localhost:3000 (CSP supprimée)');
});
