import { isValid } from 'date-fns';
import { InvalidParamError } from '../../utils/errors/InvalidParamError';
import Animal from '../../entities/Animal';

class CreateAnimalService {
  constructor(AnimalRepository) {
    this.AnimalRepository = AnimalRepository;
  }

  async execute({ name, dateOfBirth, type, weight }) {
    if (!isValid(dateOfBirth)) throw new InvalidParamError('dateOfBirth');

    if (weight <= 0) throw new InvalidParamError('weight');

    return this.AnimalRepository.add(
      new Animal(name, dateOfBirth, type, weight)
    );
  }
}

export default CreateAnimalService;
