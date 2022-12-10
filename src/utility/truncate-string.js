const postfix = '...';

function truncateString(string, maxLength = 50) {
  const needTruncate = string.length > maxLength;

  if (!needTruncate) {
    return string;
  }

  const truncationLength = maxLength - postfix.length;
  const truncatedName = string.slice(0, truncationLength);

  return `${truncatedName}${postfix}`;
}

export { truncateString };
