import { readdir } from 'fs/promises';
import { basename, extname } from 'path';
import { AbstractExecutor } from './abstract-executor.js';

const isNameTruncated = true;

function truncateName(name, type, maxLength = 50) {
  const needTruncate = name.length > maxLength;

  if (!needTruncate) {
    return name;
  }

  const postfix = '...';

  if (type === 'directory') {
    const truncationLength = maxLength - postfix.length;
    const truncatedName = name.slice(0, truncationLength);

    return `${truncatedName}${postfix}`;
  }

  const ext = extname(name);
  const nameWithoutExt = basename(name, ext);
  const truncationLength = maxLength - postfix.length - ext.length;
  const truncatedNameWithoutExt = nameWithoutExt.slice(0, truncationLength);

  return `${truncatedNameWithoutExt}${postfix}${ext}`;
}

class LsExecutor extends AbstractExecutor {
  async executor() {
    const currentWorkingDir = process.cwd();
    const dirents = await readdir(currentWorkingDir, { withFileTypes: true });
    const dirsAndFiles = [[], []];

    dirents.reduce((result, dirent) => {
      if (dirent.isDirectory()) {
        const type = 'directory';
        const name = isNameTruncated
          ? truncateName(dirent.name, type)
          : dirent.name;

        result[0].push({ name, type });
      } else if (dirent.isFile()) {
        const type = 'file';
        const name = isNameTruncated
          ? truncateName(dirent.name, type)
          : dirent.name;

        result[1].push({ name, type });
      }

      return result;
    }, dirsAndFiles);

    console.table(dirsAndFiles.flat());
  }
}

export { LsExecutor };
