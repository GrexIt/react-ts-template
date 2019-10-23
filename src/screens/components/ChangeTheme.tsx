import * as React from 'react';
import ThemeContext from '../../contexts/ThemeContext';

export const ChangeTheme = () => {
  const { changeTheme, themeName } = React.useContext(ThemeContext);
  const toggleToTheme = themeName === 'dark' ? 'light' : 'dark';

  const toggleTheme = () => {
    changeTheme(toggleToTheme);
    console.log('changing the theme');
  };

  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
    >
      Toggle Theme to {toggleToTheme}
    </button>
  );
};
