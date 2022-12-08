import { AbstractCustomError } from './abstract-custom-error.js';

class InputError extends AbstractCustomError {
  messagePrefix = 'Invalid input';
}

export { InputError };
