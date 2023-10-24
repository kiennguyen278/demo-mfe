import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main',
  remotes: ['use-manager', 'category', 'news-manager'],
};

export default config;
