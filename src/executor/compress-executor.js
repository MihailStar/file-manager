import { createReadStream, createWriteStream } from 'fs';
import { basename, join } from 'path';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

const compressorExt = '.br';

class CompressExecutor extends AbstractExecutor {
  async executor(filePath, dirPath) {
    const inputFileName = basename(filePath);
    const inputFilePath = getAbsolutePath(filePath);

    const outputDirPath = getAbsolutePath(dirPath);
    const outputFileName = `${inputFileName}${compressorExt}`;
    const outputFilePath = join(outputDirPath, outputFileName);

    const readStream = createReadStream(inputFilePath);
    const transformStream = createBrotliCompress();
    const writeStream = createWriteStream(outputFilePath);

    await pipeline(readStream, transformStream, writeStream);
  }
}

export { CompressExecutor };
