import { RequiredFields } from '../utils/helpers/RequiredFields';
import { MissingParamError } from '../utils/errors/MissingParamError';

class AnimalController {
  async store(request, response) {
    const { body } = request;

    RequiredFields.validate({
      body,
      requiredFields: ['name', 'age', 'type', 'weight'],
    });

    return response.send();
  }

  async show(request, response) {
    const { params } = request;

    if (!params.id) throw new MissingParamError('id');

    return response.send();
  }
}

export default AnimalController;
