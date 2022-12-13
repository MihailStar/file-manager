import { readdir } from 'fs/promises';
import { basename, extname } from 'path';
import { AbstractExecutor } from './abstract-executor.js';

const isNameTruncated = true;

function truncateName(name, type, maxLength = 50) {
  if (!isNameTruncated) {
    return name;
  }

  const needTruncate = name.length > maxLength;

  if (!needTruncate) {
    return name;
  }

  const postfix = '...';

  if (type === 'file') {
    const ext = extname(name);
    const nameWithoutExt = basename(name, ext);
    const truncationLength = maxLength - postfix.length - ext.length;
    const truncatedNameWithoutExt = nameWithoutExt.slice(0, truncationLength);

    return `${truncatedNameWithoutExt}${postfix}${ext}`;
  }

  const truncationLength = maxLength - postfix.length;
  const truncatedName = name.slice(0, truncationLength);

  return `${truncatedName}${postfix}`;
}

class LsExecutor extends AbstractExecutor {
  async executor() {
    const currentWorkingDir = process.cwd();
    const dirents = await readdir(currentWorkingDir, { withFileTypes: true });
    const dirsAndFilesAndAnother = [[], [], []];

    dirents.reduce((result, dirent) => {
      if (dirent.isDirectory()) {
        const type = 'directory';
        const name = truncateName(dirent.name, type);

        result[0].push({ name, type });
      } else if (dirent.isFile()) {
        const type = 'file';
        const name = truncateName(dirent.name, type);

        result[1].push({ name, type });
      } else {
        const type = 'another';
        const name = truncateName(dirent.name, type);

        result[2].push({ name, type });
      }

      return result;
    }, dirsAndFilesAndAnother);

    console.table(dirsAndFilesAndAnother.flat());
  }
}

export { LsExecutor };
