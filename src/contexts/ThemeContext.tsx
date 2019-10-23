import * as React from 'react';
import dark from './dark';
import light from './light';

interface Itheme {
  [themeName: string]: any;
}

const themes: Itheme = {
  dark,
  light
};

interface IThemeType {
  changeTheme: (themeType: string) => void;
  currentTheme: Itheme;
  themeName: string;
}

const ThemeContext = React.createContext<IThemeType>({
  changeTheme: (themeType: string) => {},
  currentTheme: {},
  themeName: ''
});

export const ThemeContextProvider = ({ children }: any) => {
  const [currentTheme, setCurrentTheme] = React.useState(themes.light);
  const [themeName, setThemeName] = React.useState('light');

  const changeTheme = (themeType: string) => {
    console.log('Inside ThemeContextProvider changeTheme ', themeType);
    const newTheme = themes[themeType];
    setCurrentTheme(newTheme);
    setThemeName(themeType);
  };

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        currentTheme,
        themeName
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
