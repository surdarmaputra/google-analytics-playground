import '../styles/globals.css';

import { darkTheme } from './constants';
import { DocsContainer } from './DocsContainer';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: 'html',
    dark: darkTheme,
    stylePreview: true,
  },
  docs: {
    container: DocsContainer,
  },
  viewMode: 'docs',
};
