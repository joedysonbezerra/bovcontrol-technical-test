import { Router } from 'express';
import animalsRouter from './animals.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({
    Author: 'Joédyson Bezerra',
    Github: 'https://github.com/joedysonbezerra',
    Project: 'Bov Control - Technical Test',
    Version: '0.0.1',
    Status: 'Online',
  });
});

routes.use('/animals', animalsRouter);

export default routes;
