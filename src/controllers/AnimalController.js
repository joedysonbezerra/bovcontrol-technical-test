import { MissingParamError } from '../utils/errors/MissingParamError';

class AnimalController {
  async store(request, response) {
    const { body } = request;
    const requiredFields = ['name', 'age', 'type', 'weight'];

    for (const field of requiredFields) {
      if (!body[field]) throw new MissingParamError(field);
    }
    return response.send();
  }
}

export default AnimalController;
