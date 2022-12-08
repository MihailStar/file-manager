import { InputError } from './error/input-error.js';

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

async function handleInput(trimedInput) {
  try {
    const { commandName, commandArgs } = parseInput(trimedInput);

    console.log({ commandName, commandArgs });
  } catch (reason) {
    console.error(reason);
  }
}

export { handleInput };
