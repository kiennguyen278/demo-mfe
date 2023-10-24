import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'news-manager',
  exposes: {
    './Module': 'apps/news-manager/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
