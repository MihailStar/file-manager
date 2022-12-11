import { open } from 'fs/promises';
import { AbstractExecutor } from './abstract-executor.js';

class AddExecutor extends AbstractExecutor {
  async executor(filePath) {
    const fileHandle = await open(filePath, 'wx');

    await fileHandle.close();
  }
}

export { AddExecutor };
