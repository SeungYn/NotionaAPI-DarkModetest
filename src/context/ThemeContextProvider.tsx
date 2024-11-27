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
  theme: DarkModeThemeType;
  setTheme: (theme: DarkModeThemeType) => void;
}>({ theme: 'dark', setTheme: () => {} });

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<DarkModeThemeType>(DarkModeTheme.light);

  const onSetTheme = (theme: DarkModeThemeType) => {
    // 파라미터가 다크면 라이트로 저장
    if (theme === DarkModeTheme.dark) {
      localStorage.setItem('theme', DarkModeTheme.light);
      document.querySelector('html')?.classList.remove('dark');
      setTheme(DarkModeTheme.light);
    } else {
      localStorage.setItem('theme', DarkModeTheme.dark);
      document.querySelector('html')?.classList.add('dark');
      setTheme(DarkModeTheme.dark);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme as DarkModeThemeType);
        if ((storedTheme as DarkModeThemeType) === 'dark') {
          document.querySelector('html')?.classList.add('dark');
        } else {
          document.querySelector('html')?.classList.remove('dark');
        }
      } else {
        const systemPrefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        setTheme(systemPrefersDark ? DarkModeTheme.dark : DarkModeTheme.light);
        if (systemPrefersDark) {
          document.querySelector('html')?.classList.add('dark');
        } else {
          document.querySelector('html')?.classList.remove('dark');
        }
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
