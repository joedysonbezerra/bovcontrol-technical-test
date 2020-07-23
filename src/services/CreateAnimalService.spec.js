import CreateAnimalService from './CreateAnimalService';
import { InvalidParamError } from '../utils/errors/InvalidParamError';

const makeSut = () => {
  return new CreateAnimalService();
};

describe('CreateAnimalService', () => {
  it('Should be able return 400 if an invalid age is provided', async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        name: 'any_name',
        age: -1,
        type: 'cow',
        weight: 100,
      },
    };
    try {
      await sut.execute(httpRequest);
    } catch (error) {
      expect(error.statusCode).toBe(400);
      expect(error).toEqual(new InvalidParamError('age'));
    }
  });
  it('Should be able return 400 if an invalid weight is provided', async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        name: 'any_name',
        age: 10,
        type: 'cow',
        weight: -1,
      },
    };
    try {
      await sut.execute(httpRequest);
    } catch (error) {
      expect(error.statusCode).toBe(400);
      expect(error).toEqual(new InvalidParamError('weight'));
    }
  });
});
