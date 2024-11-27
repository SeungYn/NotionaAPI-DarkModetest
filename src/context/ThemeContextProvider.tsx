'use client';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

export const DarkModeTheme = { dark: 'dark', light: 'light' } as const;
export type DarkModeThemeType =
  (typeof DarkModeTheme)[keyof typeof DarkModeTheme];

const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: DarkModeThemeType) => void;
}>({ theme: 'dark', setTheme: () => {} });

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<DarkModeThemeType>(DarkModeTheme.light);

  const onSetTheme = (theme: DarkModeThemeType) => {
    if (theme === DarkModeTheme.dark) {
      localStorage.setItem('theme', DarkModeTheme.light);
      setTheme(DarkModeTheme.light);
    } else {
      localStorage.setItem('theme', DarkModeTheme.dark);
      setTheme(DarkModeTheme.dark);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme as DarkModeThemeType);
      } else {
        const systemPrefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        setTheme(systemPrefersDark ? DarkModeTheme.dark : DarkModeTheme.light);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: onSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useDarkModeTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) throw new Error('Context를 Provider로 감싸주세요!');
  return context;
};
