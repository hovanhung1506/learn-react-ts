import { createContext } from 'react';

interface ProgressContextProviderProps {
  children: React.ReactNode;
}
interface ProgressContextDefault {
  lastTime: string;
  status: string;
}

const progressDefault = {
  lastTime: '20/02/2022',
  status: 'In Progress',
};

export const ProgressContext = createContext<ProgressContextDefault>(progressDefault);
const ProgressContextProvider = ({ children }: ProgressContextProviderProps) => {
  return <ProgressContext.Provider value={progressDefault}>{children}</ProgressContext.Provider>;
};

export default ProgressContextProvider;
