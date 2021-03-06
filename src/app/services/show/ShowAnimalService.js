import { NotFoundError } from '../../utils/errors/NotFoundError';

class ShowAnimalService {
  constructor(AnimalRepository) {
    this.AnimalRepository = AnimalRepository;
  }

  async execute(id) {
    const animal = await this.AnimalRepository.findById(id);

    if (!animal) throw new NotFoundError('Animal');

    return animal;
  }
}

export default ShowAnimalService;
