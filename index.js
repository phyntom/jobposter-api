import express from 'express';
import jsonServer from 'json-server';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000; // Use Render's assigned port for backend

// JSON Server Setup
const jsonServerApp = jsonServer.create();
const router = jsonServer.router(path.resolve('src/dummy/gemini.json')); // Your JSON data file
const middlewares = jsonServer.defaults();
jsonServerApp.use(middlewares);
jsonServerApp.use(router);

// Mount JSON server under /api path
app.use('/api', jsonServerApp);

// Start Express server
app.listen(port, (err) => {
   if (err) {
      console.error('Error starting server:', err);
   } else {
      console.log(`Backend server is running on port ${port}`);
   }
});
