import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class HashExecutor extends AbstractExecutor {
  async executor(filePath) {
    const absolutePath = getAbsolutePath(filePath);
    const readStream = createReadStream(absolutePath);
    const transformStream = createHash('sha256');

    await pipeline(readStream, transformStream);

    console.log(transformStream.digest('hex'));
  }
}

export { HashExecutor };
