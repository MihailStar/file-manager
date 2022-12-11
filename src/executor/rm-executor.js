import { unlink } from 'fs/promises';
import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class RmExecutor extends AbstractExecutor {
  async executor(filePath) {
    const inputFilePath = getAbsolutePath(filePath);

    await unlink(inputFilePath);
  }
}

export { RmExecutor };
