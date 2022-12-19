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

const typeToPosition = {
  directory: 1,
  file: 2,
  another: 3,
};

class LsExecutor extends AbstractExecutor {
  async executor() {
    const currentWorkingDir = process.cwd();
    const dirents = await readdir(currentWorkingDir, { withFileTypes: true });

    if (dirents.length === 0) {
      console.log('Empty directory');
      return;
    }

    const items = dirents.map((dirent) => {
      const type = dirent.isDirectory()
        ? 'directory'
        : dirent.isFile()
        ? 'file'
        : 'another';
      const name = truncateName(dirent.name, type);

      return { name, type };
    });

    const sortedItems = items.sort((itemA, itemB) => {
      if (typeToPosition[itemA.type] > typeToPosition[itemB.type]) {
        return 1;
      }

      if (typeToPosition[itemA.type] < typeToPosition[itemB.type]) {
        return -1;
      }

      return itemA.type.localeCompare(itemB.type);
    });

    console.table(sortedItems);
  }
}

export { LsExecutor };
