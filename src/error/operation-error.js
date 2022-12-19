import { AbstractCustomError } from './abstract-custom-error.js';

const messagePrefix = 'Operation failed';

class OperationError extends AbstractCustomError {
  constructor(message = '') {
    super(`${messagePrefix}${message.length > 0 ? `. ${message}` : ''}`);
  }
}

export { OperationError };
