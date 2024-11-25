import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, 'build')));

// Proxy API requests to Swiggy
app.use(
    '/api',
    createProxyMiddleware({
        target: 'https://www.swiggy.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Strip '/api' from the path
    })
);

// Serve the React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});