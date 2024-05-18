import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;
  theme.name = isDarkMode ? 'dark' : 'light'; // Add the theme name to the theme object

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const lightTheme = {
  background: '#fff',
  text: '#000',
  rectangle: '#ddd',
  rectangleText: '#000',
  separator: 'grey',
};

const darkTheme = {
  background: '#000',
  text: '#fff',
  rectangle: '#333',
  rectangleText: '#fff',
  separator: 'grey',
};
