// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3007;

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static assets from Vite's build folder (dist)
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Handle React client-side routing
app.get('*', (req, res) => {
  const filePath = path.join(distPath, 'index.html');

  // If the path doesn't exist, return 404 HTML with 404 status
  if (!req.url.includes('.') && !req.url.startsWith('/assets')) {
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(404).sendFile(path.join(distPath, '404.html'));
      }
    });
  } else {
    res.status(404).sendFile(path.join(distPath, '404.html'));
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
