import { AbstractExecutor } from './abstract-executor.js';

class HelpExecutor extends AbstractExecutor {
  async executor() {
    console.log({
      commandExecutor: this.constructor.name,
      commandArgs: arguments,
    });
  }
}

export { HelpExecutor };
