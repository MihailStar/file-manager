import { AbstractExecutor } from './abstract-executor.js';

class HashExecutor extends AbstractExecutor {
  async executor(filePath) {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { HashExecutor };
