import { AbstractExecutor } from './abstract-executor.js';

class LsExecutor extends AbstractExecutor {
  async executor() {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { LsExecutor };
