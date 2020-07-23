import AppError from './AppError';

export class NotFoundError extends AppError {
  constructor(entity, statusCode = 400) {
    super('NotFoundError', `${entity} not found`, statusCode);
  }
}
