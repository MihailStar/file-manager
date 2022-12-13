import { createWriteStream } from 'fs';
import { open } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class CompressExecutor extends AbstractExecutor {
  async executor(filePath, newFilePath) {
    const inputFilePath = getAbsolutePath(filePath);
    const outputFilePath = getAbsolutePath(newFilePath);

    const readStream = (await open(inputFilePath)).createReadStream();
    const transformStream = createBrotliCompress();
    const writeStream = createWriteStream(outputFilePath, { flags: 'wx' });

    await pipeline(readStream, transformStream, writeStream);
  }
}

export { CompressExecutor };
