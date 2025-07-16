const quasarColors = new Set([
  'primary',
  'secondary',
  'accent',
  'dark',
  'positive',
  'negative',
  'info',
  'warning',
  'dark-page',
]);

export const isQuasarColor = (value) => quasarColors.has(value);
