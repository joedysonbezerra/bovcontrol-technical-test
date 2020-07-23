import 'localenv';
import express from 'express';
import 'express-async-errors';
import AppError from './app/utils/errors/AppError';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.setup();
    this.routes();
    this.exceptionHandler();
  }

  setup() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use((err, request, response, next) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          name: err.name,
          message: err.message,
        });
      }
      console.error(err);
      return response.status(500).json({
        status: 'error',
        name: 'ServerError',
        message: 'Internal server error',
      });
    });
  }
}

export default new App().server;
