import { AbstractExecutor } from './abstract-executor.js';

class CpExecutor extends AbstractExecutor {
  async executor(filePath, dirPath) {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { CpExecutor };
