const optionPrefix = '--';
const optionSeparator = '=';
const optionRegExp = new RegExp(`^${optionPrefix}.+${optionSeparator}.+$`);

function getСliOptions() {
  const { argv: cliArgs } = process;
  const options = {};

  for (let index = 2; index < cliArgs.length; index += 1) {
    const optionСandidate = cliArgs[index];

    if (optionRegExp.test(optionСandidate)) {
      const [key, value] = optionСandidate.split(optionSeparator);

      options[key.slice(optionPrefix.length)] = value;
    }
  }

  return options;
}

export { getСliOptions };
