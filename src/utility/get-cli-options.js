const optionPrefix = '--';
const optionSeparator = '=';
const optionRegExp = RegExp(`^${optionPrefix}.+${optionSeparator}.+$`);

function getСliOptions() {
  const { argv: cliArguments } = process;
  const options = {};

  for (let index = 2; index < cliArguments.length; index += 1) {
    const optionСandidate = cliArguments[index];

    if (optionRegExp.test(optionСandidate)) {
      const [key, value] = optionСandidate.split(optionSeparator);

      options[key.slice(optionPrefix.length)] = value;
    }
  }

  return options;
}

export { getСliOptions };
