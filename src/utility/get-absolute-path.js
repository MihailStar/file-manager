import { isAbsolute, join } from 'path';

function getAbsolutePath(path) {
  if (isAbsolute(path)) {
    return path;
  }

  const currentWorkingDir = process.cwd();
  const absolutePath = join(currentWorkingDir, path);

  return absolutePath;
}

export { getAbsolutePath };
