import * as React from 'react';
import ThemeContext from '../../contexts/ThemeContext';

export const ChangeTheme = () => {
  const { changeTheme, themeName } = React.useContext(ThemeContext);
  const newTheme = themeName === 'dark' ? 'light' : 'dark';

  return (
    <button
      onClick={() => {
        changeTheme(newTheme);
      }}
    >
      Toggle Theme to {newTheme}
    </button>
  );
};
