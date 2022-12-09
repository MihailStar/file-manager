import { AbstractExecutor } from './abstract-executor.js';

class RmExecutor extends AbstractExecutor {
  async executor(filePath) {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { RmExecutor };
