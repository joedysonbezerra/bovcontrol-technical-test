import AnimalController from './AnimalController';
import { MissingParamError } from '../utils/errors/MissingParamError';

const makeSut = () => {
  return new AnimalController();
};

describe('Animal Controller', () => {
  describe('store', () => {
    it('Should be able return 400 if no name is provided', async () => {
      const sut = makeSut();

      const httpRequest = {
        body: {
          dateOfBirth: new Date(2014, 6, 2),
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
    it('Should be able return 400 if no dateOfBirth is provided', async () => {
      const sut = makeSut();

      const httpRequest = {
        body: {
          name: 'any_name',
          type: 'cow',
          weight: 100,
        },
      };
      try {
        await sut.store(httpRequest);
      } catch (error) {
        expect(error.statusCode).toBe(400);
        expect(error).toEqual(new MissingParamError('dateOfBirth'));
      }
    });
    it('Should be able return 400 if no type is provided', async () => {
      const sut = makeSut();

      const httpRequest = {
        body: {
          name: 'any_name',
          dateOfBirth: new Date(2014, 6, 2),
          weight: 100,
        },
      };
      try {
        await sut.store(httpRequest);
      } catch (error) {
        expect(error.statusCode).toBe(400);
        expect(error).toEqual(new MissingParamError('type'));
      }
    });
    it('Should be able return 400 if no weight is provided', async () => {
      const sut = makeSut();

      const httpRequest = {
        body: {
          name: 'any_name',
          dateOfBirth: new Date(2014, 6, 2),
          type: 'cow',
        },
      };
      try {
        await sut.store(httpRequest);
      } catch (error) {
        expect(error.statusCode).toBe(400);
        expect(error).toEqual(new MissingParamError('weight'));
      }
    });
  });
  describe('show', () => {
    it('Should be able return 400 if no id is provided', async () => {
      const sut = makeSut();

      const httpRequest = {
        params: {},
      };
      try {
        await sut.show(httpRequest);
      } catch (error) {
        expect(error.statusCode).toBe(400);
        expect(error).toEqual(new MissingParamError('id'));
      }
    });
  });
  describe('update', () => {
    it('Should be able return 400 if no id is provided', async () => {
      const sut = makeSut();

      const httpRequest = {
        params: {},
      };
      try {
        await sut.show(httpRequest);
      } catch (error) {
        expect(error.statusCode).toBe(400);
        expect(error).toEqual(new MissingParamError('id'));
      }
    });
  });
});
