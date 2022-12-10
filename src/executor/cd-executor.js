import { isAbsolute, join } from 'path';
import { AbstractExecutor } from './abstract-executor.js';

class CdExecutor extends AbstractExecutor {
  async executor(dirPath) {
    const currentWorkingDir = process.cwd();
    const absolutePath = isAbsolute(dirPath)
      ? dirPath
      : join(currentWorkingDir, dirPath);

    process.chdir(absolutePath);
  }
}

export { CdExecutor };
