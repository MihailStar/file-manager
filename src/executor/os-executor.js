import { AbstractExecutor } from './abstract-executor.js';

class OsExecutor extends AbstractExecutor {
  async executor(option) {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { OsExecutor };
