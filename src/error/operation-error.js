import { CustomError } from './custom-error.js';

class OperationError extends CustomError {
  constructor(description) {
    super(
      `Operation failed${
        typeof description === 'string' ? `. ${description}` : ''
      }`
    );
  }
}

export { OperationError };
