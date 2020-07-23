import { RequiredFields } from '../utils/helpers/RequiredFields';

class AnimalController {
  async store(request, response) {
    const { body } = request;

    RequiredFields.validate({
      body,
      requiredFields: ['name', 'age', 'type', 'weight'],
    });

    return response.send();
  }
}

export default AnimalController;
