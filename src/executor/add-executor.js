import { open } from 'fs/promises';
import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class AddExecutor extends AbstractExecutor {
  async executor(filePath) {
    const inputFilePath = getAbsolutePath(filePath);
    const fileHandle = await open(inputFilePath, 'wx');

    await fileHandle.close();
  }
}

export { AddExecutor };
