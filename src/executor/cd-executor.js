import { AbstractExecutor } from './abstract-executor.js';

class CdExecutor extends AbstractExecutor {
  async executor(dirPath) {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { CdExecutor };
