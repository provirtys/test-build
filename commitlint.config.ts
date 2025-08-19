import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['DEV-'],
    },
  },
};

export default config;
