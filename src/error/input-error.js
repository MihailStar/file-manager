import { CustomError } from './custom-error.js';

class InputError extends CustomError {
  constructor(description) {
    super(
      `Invalid input${
        typeof description === 'string' ? `. ${description}` : ''
      }`
    );
  }
}

export { InputError };
