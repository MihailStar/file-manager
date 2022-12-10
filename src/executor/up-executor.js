import { join } from 'path';
import { AbstractExecutor } from './abstract-executor.js';

class UpExecutor extends AbstractExecutor {
  async executor() {
    const currentDir = process.cwd();

    process.chdir(join(currentDir, './..'));
  }
}

export { UpExecutor };
