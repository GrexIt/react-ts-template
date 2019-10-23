import * as React from 'react';
import ThemeContext from '../../contexts/ThemeContext';

export const Hello = () => {
  const { currentTheme, themeName } = React.useContext(ThemeContext);
  const { fontSize, backgroundColor, color } = currentTheme;
  console.log('rendering Hello with themeName ', themeName);
  return (
    <p style={{ ...styles.wrapper, backgroundColor, fontSize, color }}>Hello from MainScreen!!</p>
  );
};

const styles = {
  wrapper: {
    fontSize: 12
  }
};
