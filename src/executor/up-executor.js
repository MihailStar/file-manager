import { posix } from 'path';
import { AbstractExecutor } from './abstract-executor.js';

class UpExecutor extends AbstractExecutor {
  async executor() {
    const { sep: slash } = posix;

    process.chdir(`.${slash}..`);
  }
}

export { UpExecutor };
