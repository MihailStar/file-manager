import { AbstractCustomError } from './abstract-custom-error.js';

class OperationError extends AbstractCustomError {
  messagePrefix = 'Operation failed';
}

export { OperationError };
