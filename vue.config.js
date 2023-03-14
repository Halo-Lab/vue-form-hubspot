import { defineConfig } from '@vue/cli-service';
import path from 'path';

export default defineConfig({
  css: { extract: false },

  chainWebpack(config) {
    config.resolve.symlinks(false);
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'));
  },
});
