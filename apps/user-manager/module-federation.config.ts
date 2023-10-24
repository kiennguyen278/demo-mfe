import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'use-manager',
  exposes: {
    './Module': 'apps/user-manager/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
