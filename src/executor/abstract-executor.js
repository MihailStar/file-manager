import { InputError } from '../error/input-error.js';

class AbstractExecutor {
  validateArgs(...args) {
    if (args.length === this.executor.length) {
      return true;
    }

    return false;
  }

  async execute(...args){
    const isArgsValid = this.validateArgs(...args);

    if (!isArgsValid) {
      throw new InputError('Command argument');
    }

    await this.executor(...args);
  }
}

export { AbstractExecutor };
