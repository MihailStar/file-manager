import { join } from 'path';
import { AbstractExecutor } from './abstract-executor.js';

class UpExecutor extends AbstractExecutor {
  async executor() {
    const currentWorkingDir = process.cwd();

    process.chdir(join(currentWorkingDir, './..'));
  }
}

export { UpExecutor };
