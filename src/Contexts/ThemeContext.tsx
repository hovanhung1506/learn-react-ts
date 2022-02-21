import { PropTypes } from '@mui/material';
import { createContext, useState } from 'react';

interface ThemeContextProviderProps {
  children: React.ReactNode;
}
interface ThemeContextDefault {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}
const ThemeContextDefaultData = {
  theme: 'primary' as PropTypes.Color,
  toggleTheme: (theme: PropTypes.Color) => {},
};
export const ThemeContext = createContext<ThemeContextDefault>(ThemeContextDefaultData);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<PropTypes.Color>(ThemeContextDefaultData.theme);
  const toggleTheme = (theme: PropTypes.Color) => {
    setTheme(theme);
  };
  const ThemeContextDynamicData = { theme, toggleTheme };
  return <ThemeContext.Provider value={ThemeContextDynamicData}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
