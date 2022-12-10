import { readdir } from 'fs/promises';
import { truncateString } from '../utility/truncate-string.js';
import { AbstractExecutor } from './abstract-executor.js';

const isNameTruncated = false;

class LsExecutor extends AbstractExecutor {
  async executor() {
    const currentWorkingDir = process.cwd();
    const dirents = await readdir(currentWorkingDir, { withFileTypes: true });
    const list = dirents
      .reduce(
        (result, dirent) => {
          const name = isNameTruncated
            ? truncateString(dirent.name)
            : dirent.name;

          if (dirent.isDirectory()) {
            result[0].push({ name, type: 'directory' });
          } else if (dirent.isFile()) {
            result[1].push({ name, type: 'file' });
          }

          return result;
        },
        [[], []]
      )
      .flat();

    console.table(list);
  }
}

export { LsExecutor };
