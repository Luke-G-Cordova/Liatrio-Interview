import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { default as endpoints } from './api/endpoints/index.js';

const app = express();

app.use('/static', express.static('static'));

endpoints.forEach((endpoint) => {
  switch (endpoint.method) {
    case 'GET':
      console.log('Received a GET request');
      app.get(`${endpoint.rout}`, endpoint.fn);
      break;
    // handle other methods such as POST, PUT, DELETE
    default:
      // if we try to add a route using a method that is not supported log it out
      console.log(`method: ${endpoint.method} : is not supported`);
      break;
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
