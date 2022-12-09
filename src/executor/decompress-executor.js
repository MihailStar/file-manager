import { AbstractExecutor } from './abstract-executor.js';

class DecompressExecutor extends AbstractExecutor {
  async executor(filePath, newFilePath) {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { DecompressExecutor };
