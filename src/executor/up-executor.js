import { AbstractExecutor } from './abstract-executor.js';

class UpExecutor extends AbstractExecutor {
  async executor() {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { UpExecutor };
