import { MissingParamError } from '../../errors/MissingParamError';

export class RequiredFields {
  static validate({ body, requiredFields }) {
    for (const field of requiredFields) {
      if (!body[field]) throw new MissingParamError(field);
    }
  }
}
