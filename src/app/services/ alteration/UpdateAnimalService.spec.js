import UpdateAnimalService from './UpdateAnimalService';
import { NotFoundError } from '../../utils/errors/NotFoundError';

const makeAnimalRepository = () => {
  class AnimalRepository {
    constructor() {
      this.animalsStub = [
        {
          id: '5e7412262856dc7f5d5cd694',
          name: 'animal_1',
          age: '6 Months',
          type: 'cow',
          weight: 100,
        },
      ];
    }

    async findOne(id) {
      return this.animalsStub.find((animal) => animal.id === id);
    }
  }

  return new AnimalRepository();
};

const makeSut = () => {
  const repository = makeAnimalRepository();
  return new UpdateAnimalService(repository);
};

describe('UpdateAnimalService', () => {
  it("Should be able return 400 if don't find the animal", async () => {
    const sut = makeSut();

    const request = {
      id: '5e7412262856dc7f5d5cd634',
      body: {
        id: '5e7412262856dc7f5d5cd694',
        name: 'animal_1',
        age: '6 Months',
        type: 'cow',
        weight: 100,
      },
    };
    try {
      await sut.execute(request.id);
    } catch (error) {
      expect(error.statusCode).toBe(400);
      expect(error).toEqual(new NotFoundError('Animal'));
    }
  });
});
