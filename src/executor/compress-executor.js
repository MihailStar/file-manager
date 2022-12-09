import { AbstractExecutor } from './abstract-executor.js';

class CompressExecutor extends AbstractExecutor {
  async executor(filePath, newFilePath) {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { CompressExecutor };
