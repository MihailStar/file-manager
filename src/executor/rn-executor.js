import { rename } from 'fs/promises';
import { OperationError } from '../error/operation-error.js';
import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { isExist } from '../utility/is-exist.js';
import { AbstractExecutor } from './abstract-executor.js';

class RnExecutor extends AbstractExecutor {
  async executor(filePath, newFilePath) {
    const inputFilePath = getAbsolutePath(filePath);
    const outputFilePath = getAbsolutePath(newFilePath);

    if (await isExist(outputFilePath)) {
      throw new OperationError('Code EEXIST');
    }

    await rename(inputFilePath, outputFilePath);
  }
}

export { RnExecutor };
