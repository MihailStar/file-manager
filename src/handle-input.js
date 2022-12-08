/** @tutorial https://qna.habr.com/answer?answer_id=1587593 */
const partOfCommandRegExp = /"([^"]+)"|([^ ]+)/g;

async function handleInput(trimedInput) {
  if (trimedInput.length === 0) {
    return;
  }

  const matches = trimedInput.matchAll(partOfCommandRegExp);
  const сommandParts = [];

  for (const match of matches) {
    const [, partOfCommandWithQuotes, partOfCommandWithoutQuotes] = match;
    const partOfCommand = partOfCommandWithQuotes ?? partOfCommandWithoutQuotes;

    сommandParts.push(partOfCommand);
  }

  const [commandName, ...commandArgs] = сommandParts;

  console.log({ commandName, commandArgs });
}

export { handleInput };
