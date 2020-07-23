import { parseISO } from 'date-fns';
import { RequiredFields } from '../utils/helpers/validators/RequiredFields';
import { MissingParamError } from '../utils/errors/MissingParamError';
import AnimalRepositoryMongo from '../repositories/AnimalRepository';
import CreateAnimalService from '../services/creation/CreateAnimalService';
import ShowAnimalService from '../services/show/ShowAnimalService';
import UpdateAnimalService from '../services/alteration/UpdateAnimalService';

class AnimalController {
  async store(request, response) {
    const { body } = request;

    RequiredFields.validate({
      body,
      requiredFields: ['name', 'dateOfBirth', 'type', 'weight'],
    });
    body.dateOfBirth = parseISO(body.dateOfBirth);

    const animal = await new CreateAnimalService(AnimalRepositoryMongo).execute(
      body
    );

    return response.json(animal);
  }

  async show(request, response) {
    const { params } = request;

    if (!params.id) throw new MissingParamError('id');

    const animal = await new ShowAnimalService(AnimalRepositoryMongo).execute(
      params.id
    );

    return response.json(animal);
  }

  async update(request, response) {
    const { params } = request;

    if (!params.id) throw new MissingParamError('id');

    const animal = await new UpdateAnimalService(AnimalRepositoryMongo).execute(
      params.id,
      request.body
    );

    return response.json(animal);
  }
}

export default AnimalController;
