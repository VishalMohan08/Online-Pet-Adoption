import { useState, useEffect } from 'react';

export default function useTheme() {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      console.log('New theme:', newTheme); // Add this line to check if the theme is toggled
    };
  
    return [theme, toggleTheme];
  };
  