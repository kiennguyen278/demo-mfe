import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'category',
  exposes: {
    './Module': 'apps/category/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
