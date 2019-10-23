import * as React from 'react';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { ChangeTheme } from './components/ChangeTheme';
import { Hello } from './components/Hello';

export const Main = () => {
  console.log('rendering main');
  return (
    <ThemeContextProvider>
      <Hello />
      <ChangeTheme />
    </ThemeContextProvider>
  );
};
