import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class CdExecutor extends AbstractExecutor {
  async executor(dirPath) {
    process.chdir(getAbsolutePath(dirPath));
  }
}

export { CdExecutor };
