import { createWriteStream } from 'fs';
import { open } from 'fs/promises';
import { basename, join } from 'path';
import { pipeline } from 'stream/promises';
import { getAbsolutePath } from '../utility/get-absolute-path.js';
import { AbstractExecutor } from './abstract-executor.js';

class CpExecutor extends AbstractExecutor {
  async executor(filePath, dirPath) {
    const inputFileName = basename(filePath);
    const inputFilePath = getAbsolutePath(filePath);
    const outputDirPath = getAbsolutePath(dirPath);
    const outputFilePath = join(outputDirPath, inputFileName);

    const readStream = (await open(inputFilePath)).createReadStream();
    const writeStream = createWriteStream(outputFilePath, { flags: 'wx' });

    await pipeline(readStream, writeStream);
  }
}

export { CpExecutor };
