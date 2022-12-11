import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class UpExecutor extends AbstractExecutor {
  async executor() {
    process.chdir(getAbsolutePath('./..'));
  }
}

export { UpExecutor };
