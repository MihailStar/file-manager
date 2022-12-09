import { AbstractExecutor } from './abstract-executor.js';

class RnExecutor extends AbstractExecutor {
  async executor(filePath, newFilePath) {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { RnExecutor };
