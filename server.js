import express from 'express';
import { default as endpoints } from './api/endpoints/index.js';

const app = express();

endpoints.forEach((endpoint) => {
  switch (endpoint.method) {
    case 'GET':
      app.get(`${endpoint.rout}`, endpoint.fn);
      break;
    // handle other methods such as POST, PUT, DELETE
    default:
      // if we try to add a route using a method that is not supported log it out
      console.log(`method: ${endpoint.method} : is not supported`);
      break;
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
