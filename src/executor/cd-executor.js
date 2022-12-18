import { getEndingSlashPath } from '../utility/get-ending-slash-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class CdExecutor extends AbstractExecutor {
  async executor(dirPath) {
    const dirPathWithEndingSlash = getEndingSlashPath(dirPath);

    process.chdir(dirPathWithEndingSlash);
  }
}

export { CdExecutor };
