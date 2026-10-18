// Server locale di prova: node tools/serve.mjs [porta] [--lan]
// Senza --lan risponde solo a questo computer; con --lan anche ai dispositivi della rete di casa.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { networkInterfaces } from 'node:os';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const lan = process.argv.includes('--lan');
const port = +(process.env.PORT || process.argv.slice(2).find(a => /^\d+$/.test(a)) || 8091);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.ttf': 'font/ttf', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json' };

const handler = async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  // Niente file nascosti (.git ecc.).
  if (path.split(/[/\\]/).some(p => p.startsWith('.'))) { res.writeHead(404).end('Not found'); return; }
  const file = join(root, path.endsWith('/') ? path + 'index.html' : path);
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }).end(body);
  } catch { res.writeHead(404).end('Not found'); }
};

if (lan) {
  createServer(handler).listen(port, '0.0.0.0', () => {
    const ips = Object.values(networkInterfaces()).flat().filter(i => i && i.family === 'IPv4' && !i.internal).map(i => i.address);
    console.log(`Rete di casa: ${ips.map(ip => `http://${ip}:${port}`).join('  ')}`);
  });
} else {
  createServer(handler).listen(port, '127.0.0.1', () => console.log(`http://localhost:${port}`));
  createServer(handler).listen(port, '::1').on('error', () => {});
}
