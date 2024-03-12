import { defineConfig, presetWind } from 'unocss';

export default defineConfig({
  presets: [presetWind({ prefix: 'tw-' })],
  rules: [],
  theme: {
    colors: {
      'dark-light': '#333',
      accent: '#ff7f00',
    }
  },
});
