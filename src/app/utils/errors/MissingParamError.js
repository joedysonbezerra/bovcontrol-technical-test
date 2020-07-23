import AppError from './AppError';

export class MissingParamError extends AppError {
  constructor(paramName, statusCode = 400) {
    super('MissingParamError', `Missing param: ${paramName}`, statusCode);
  }
}
