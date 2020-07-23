import { InvalidParamError } from '../utils/errors/InvalidParamError';
import Animal from '../entities/Animal';

class CreateAnimalService {
  constructor(AnimalRepository) {
    this.AnimalRepository = AnimalRepository;
  }

  async execute({ name, age, type, weight }) {
    if (age <= 0) throw new InvalidParamError('age');

    if (weight <= 0) throw new InvalidParamError('weight');

    return this.AnimalRepository.add(new Animal(name, age, type, weight));
  }
}

export default CreateAnimalService;
