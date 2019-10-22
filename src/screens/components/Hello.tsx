import * as React from 'react';
import ThemeContext from '../../contexts/ThemeContext';

export const Hello = () => {
  const { currentTheme } = React.useContext(ThemeContext);
  const { fontSize, backgroundColor } = currentTheme;
  return <p style={{ ...styles.wrapper, backgroundColor, fontSize }}>Hello from MainScreen!!</p>;
};

const styles = {
  wrapper: {
    fontSize: 12
  }
};
