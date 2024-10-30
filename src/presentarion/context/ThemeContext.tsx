import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {darkColor, lightColor, ThemeColors} from '../screens/theme/theme';
import {useColorScheme} from 'react-native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;

  setTheme: (Theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
    console.log({colorScheme});
  }, [colorScheme]);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        colors: currentTheme === 'light' ? lightColor : darkColor,
        setTheme: setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
