import { Router } from 'express';
import AnimalController from '../app/controllers/AnimalController';

const controller = new AnimalController();

const animalsRouter = Router();

animalsRouter.post('/', controller.store);
animalsRouter.get('/:id', controller.show);
animalsRouter.put('/:id', controller.update);

export default animalsRouter;
