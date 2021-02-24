export class MissingParamError extends Error {
  constructor(param: string) {
    super(`The param {${param}} is missing`);
    this.name = 'MissingParamError';
  }
}
