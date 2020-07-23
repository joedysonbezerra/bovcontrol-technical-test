import 'localenv';
import express from 'express';

class App {
  constructor() {
    this.server = express();
    this.setup();
    this.routes();
  }

  setup() {
    this.server.use(express.json());
  }

  routes() {}
}

export default new App().server;
