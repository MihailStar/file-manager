import { arch, cpus, EOL, homedir, userInfo } from 'os';
import { isFunction } from '../utility/is-function.js';
import { AbstractExecutor } from './abstract-executor.js';

function getEOL() {
  console.log(JSON.stringify(EOL).slice(1, -1));
}

function getCpus() {
  console.table(
    cpus().map(({ model, speed: speedInMHz }) => ({
      model,
      speedInGHz: speedInMHz / 1000,
    }))
  );
}

function getHomedir() {
  console.log(homedir());
}

function getUsername() {
  try {
    console.log(userInfo().username);
  } catch {
    console.log('Unknown');
  }
}

function getArchitecture() {
  console.log(arch());
}

const optionToFunction = {
  '--EOL': getEOL,
  '--cpus': getCpus,
  '--homedir': getHomedir,
  '--username': getUsername,
  '--architecture': getArchitecture,
};

class OsExecutor extends AbstractExecutor {
  validateArgs(...args) {
    if (
      super.validateArgs(...args) &&
      args.every((arg) => isFunction(optionToFunction[arg]))
    ) {
      return true;
    }

    return false;
  }

  async executor(option) {
    optionToFunction[option]();
  }
}

export { OsExecutor };
