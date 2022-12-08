import { InputError } from './error/input-error.js';
import { OperationError } from './error/operation-error.js';

const partOfCommandRegExp = /"([^"]+)"|([^ ]+)/g;

function parseInput(trimedInput) {
  if (trimedInput.length === 0) {
    throw new InputError();
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

function handleError(reason) {
  if (reason instanceof InputError || reason instanceof OperationError) {
    console.error(reason.message);
    return;
  }

  console.error(new OperationError().message);
}

async function handleInput(trimedInput) {
  try {
    const { commandName, commandArgs } = parseInput(trimedInput);

    console.log({ commandName, commandArgs });
  } catch (reason) {
    handleError(reason);
  }
}

export { handleInput };
