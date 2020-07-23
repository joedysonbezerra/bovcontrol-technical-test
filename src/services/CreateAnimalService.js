import { InvalidParamError } from '../utils/errors/InvalidParamError';

class CreateAnimalService {
  async execute({ name, age, type, weight }) {
    if (age <= 0) throw new InvalidParamError('age');
    if (weight <= 0) throw new InvalidParamError('weight');
  }
}

export default CreateAnimalService;
