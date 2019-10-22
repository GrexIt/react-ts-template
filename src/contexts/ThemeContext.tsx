import * as React from 'react';
import dark from './dark';
import light from './light';

const themes: any = {
  dark,
  light
};

interface IThemeType {
  changeTheme: (themeType: string) => void;
  currentTheme: any;
}

const ThemeContext = React.createContext<IThemeType>({
  changeTheme: (themeType: string) => {},
  currentTheme: {}
});

export const ThemeContextProvider = ({ children }: any) => {
  const [currentTheme, setCurrentTheme] = React.useState(themes.light);

  const changeTheme = (themeType: string) => {
    const newTheme = themes[themeType];
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        currentTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
