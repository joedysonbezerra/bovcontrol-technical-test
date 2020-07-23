import AnimalController from './AnimalController';
import { MissingParamError } from '../utils/errors/MissingParamError';

const makeSut = () => {
  return new AnimalController();
};

describe('Animal Controller', () => {
  it('Should be able return 400 if no name is provided', async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        age: 10,
        type: 'cow',
        weight: 100,
      },
    };
    try {
      await sut.store(httpRequest);
    } catch (error) {
      expect(error.statusCode).toBe(400);
      expect(error).toEqual(new MissingParamError('name'));
    }
  });
});
