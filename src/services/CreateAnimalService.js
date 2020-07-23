import { InvalidParamError } from '../utils/errors/InvalidParamError';

class CreateAnimalService {
  async execute({ name, age, type, weight }) {
    if (age <= 0) throw new InvalidParamError('age');
  }
}

export default CreateAnimalService;
