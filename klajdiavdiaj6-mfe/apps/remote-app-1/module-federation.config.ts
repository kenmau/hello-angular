import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote-app-1',
  exposes: {
    './Module': 'apps/remote-app-1/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
