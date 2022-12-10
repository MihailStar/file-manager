import { commandNameToExecutor } from './command-name-to-executor.js';
import { InputError } from './error/input-error.js';
import { OperationError } from './error/operation-error.js';
import { isError } from './utility/is-error.js';
import { isKeyInObject } from './utility/is-key-in-object.js';

const partOfCommandRegExp = /"([^"]+)"|([^ ]+)/g;

function parseInput(trimedInput) {
  if (trimedInput.length === 0) {
    throw new InputError('Empty line');
  }

  const matches = trimedInput.matchAll(partOfCommandRegExp);
  const сommandParts = [];

  for (const match of matches) {
    const [, partOfCommandWithQuotes, partOfCommandWithoutQuotes] = match;
    const partOfCommand = partOfCommandWithQuotes ?? partOfCommandWithoutQuotes;

    сommandParts.push(partOfCommand);
  }

  const [commandName, ...commandArgs] = сommandParts;

  return { commandName, commandArgs };
}

async function executeCommand(name, args) {
  if (!isKeyInObject(name, commandNameToExecutor)) {
    throw new InputError('Command name');
  }

  await commandNameToExecutor[name].execute(...args);
}

function handleError(reason) {
  if (reason instanceof InputError || reason instanceof OperationError) {
    console.error(reason.message);
    return;
  }

  if (isError(reason) && typeof reason.code === 'string') {
    console.error(new OperationError(`Code ${reason.code}`).message);
    return;
  }

  console.error(new OperationError().message);
}

async function handleInput(trimedInput) {
  try {
    const { commandName, commandArgs } = parseInput(trimedInput);

    await executeCommand(commandName, commandArgs);

    console.log(`You are currently in ${process.cwd()}`);
  } catch (reason) {
    handleError(reason);
  }
}

export { handleInput };
