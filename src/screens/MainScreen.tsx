import * as React from 'react';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { Hello } from './components/Hello';

export const Main = () => {
  return (
    <ThemeContextProvider>
      <Hello />
    </ThemeContextProvider>
  );
};
