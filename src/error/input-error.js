import { AbstractCustomError } from './abstract-custom-error.js';

const messagePrefix = 'Invalid input';

class InputError extends AbstractCustomError {
  constructor(message = '') {
    super(`${messagePrefix}${message.length > 0 ? `. ${message}` : ''}`);
  }
}

export { InputError };
