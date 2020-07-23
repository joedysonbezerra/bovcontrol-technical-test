import AppError from './AppError';

export class InvalidParamError extends AppError {
  constructor(paramName, statusCode = 400) {
    super('InvalidParamError', `Invalid param: ${paramName}`, statusCode);
  }
}
