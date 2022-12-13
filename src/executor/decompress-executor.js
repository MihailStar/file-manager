import { createWriteStream } from 'fs';
import { open } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class DecompressExecutor extends AbstractExecutor {
  async executor(filePath, newFilePath) {
    const inputFilePath = getAbsolutePath(filePath);
    const outputFilePath = getAbsolutePath(newFilePath);

    const readStream = (await open(inputFilePath)).createReadStream();
    const transformStream = createBrotliDecompress();
    const writeStream = createWriteStream(outputFilePath, { flags: 'wx' });

    await pipeline(readStream, transformStream, writeStream);
  }
}

export { DecompressExecutor };
