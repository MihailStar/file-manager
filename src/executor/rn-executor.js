import { rename } from 'fs/promises';
import { OperationError } from '../error/operation-error.js';
import { isExist } from '../utility/is-exist.js';
import { AbstractExecutor } from './abstract-executor.js';

class RnExecutor extends AbstractExecutor {
  async executor(filePath, newFilePath) {
    if (await isExist(newFilePath)) {
      throw new OperationError('Code EEXIST');
    }

    await rename(filePath, newFilePath);
  }
}

export { RnExecutor };
