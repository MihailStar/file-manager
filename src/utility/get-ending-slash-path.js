import { posix, win32 } from 'path';

function getEndingSlashPath(path) {
  const pathWithEndingSlash =
    path.endsWith(win32.sep) || path.endsWith(posix.sep)
      ? path
      : `${path}${posix.sep}`;

  return pathWithEndingSlash;
}

export { getEndingSlashPath };
