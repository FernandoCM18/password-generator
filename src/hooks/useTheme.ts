import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');
  const element = document.body;
  const mql = window.matchMedia('(prefers-color-scheme: dark)');  

  useEffect(() => {
    if (!(localStorage.getItem('theme'))) {
      const handleThemeChange = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? 'dark' : 'light';
        if (newTheme === 'dark') {
          element.classList.remove('light');
          element.classList.add('dark');
        } else {
          element.classList.remove('dark');
          element.classList.add('light');
        }
      };
  
      mql.addEventListener('change', handleThemeChange);
  
      return () => {
        mql.removeEventListener('change', handleThemeChange);
      };
    }

  }, [mql, element]);

  switch (theme) {
  case 'light':
    element.classList.remove('dark');
    element.classList.add('light');
    localStorage.setItem('theme', 'light');
    break;
  case 'dark':
    element.classList.remove('light');
    element.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    break;
  default:
    localStorage.removeItem('theme');
    mql.matches ? element.classList.add('dark') : element.classList.remove('dark');
    break;
  }

  return { theme, setTheme };
};