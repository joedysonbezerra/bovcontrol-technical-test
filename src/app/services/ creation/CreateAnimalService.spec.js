import CreateAnimalService from './CreateAnimalService';
import Animal from '../../entities/Animal';
import { InvalidParamError } from '../../utils/errors/InvalidParamError';

const makeAnimalRepository = () => {
  class AnimalRepository {
    async add({ name, age, type, weight }) {
      return { name, age, type, weight };
    }
  }

  return new AnimalRepository();
};

const makeSut = () => {
  const repository = makeAnimalRepository();
  return new CreateAnimalService(repository);
};

describe('CreateAnimalService', () => {
  it('Should be able return 400 if an invalid dateOfBirth is provided', async () => {
    const sut = makeSut();

    const request = {
      name: 'any_name',
      dateOfBirth: new Date(''),
      type: 'cow',
      weight: 100,
    };
    try {
      await sut.execute(request);
    } catch (error) {
      expect(error.statusCode).toBe(400);
      expect(error).toEqual(new InvalidParamError('dateOfBirth'));
    }
  });
  it('Should be able return 400 if an invalid weight is provided', async () => {
    const sut = makeSut();

    const request = {
      name: 'any_name',
      dateOfBirth: new Date(2014, 6, 2),
      type: 'cow',
      weight: -1,
    };
    try {
      await sut.execute(request);
    } catch (error) {
      expect(error.statusCode).toBe(400);
      expect(error).toEqual(new InvalidParamError('weight'));
    }
  });
  it('Should be able to create a new animal', async () => {
    const sut = makeSut();

    const request = {
      name: 'any_name',
      dateOfBirth: new Date(2014, 6, 2),
      type: 'cow',
      weight: 100,
    };

    const response = await sut.execute(request);

    expect(response.name).toBe('any_name');
    expect(response.age).toBe('74 months');
    expect(response.type).toBe('cow');
    expect(response.weight).toBe(100);
    expect(response).toEqual(
      new Animal('any_name', new Date(2014, 6, 2), 'cow', 100)
    );
  });
});
