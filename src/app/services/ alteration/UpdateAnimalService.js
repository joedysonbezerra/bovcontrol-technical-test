import { NotFoundError } from '../../utils/errors/NotFoundError';

class UpdateAnimalService {
  constructor(AnimalRepository) {
    this.AnimalRepository = AnimalRepository;
  }

  async execute(id, body) {
    const animal = await this.AnimalRepository.findOne(id);

    if (!animal) throw new NotFoundError('Animal');

    const updatedAnimal = await this.AnimalRepository.update(id, body);

    return updatedAnimal;
  }
}

export default UpdateAnimalService;
