const messageSeparator = '. ';

class AbstractCustomError extends Error {
  get message() {
    const hasMessage = super.message.length > 0;
    const message = hasMessage ? `${messageSeparator}${super.message}` : '';

    return `${this.messagePrefix}${message}`;
  }
}

export { AbstractCustomError };
