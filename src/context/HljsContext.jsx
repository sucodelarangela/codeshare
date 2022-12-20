import { createContext, useContext, useState } from 'react';
import * as hljs from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HljsContext = createContext();

export function HljsProvider({ children }) {
  const hljsKeys = Object.keys(hljs);
  const [hlStyle, setHlStyle] = useState('');
  return <HljsContext.Provider value={{ hljsKeys, hlStyle, setHlStyle }}>{children}</HljsContext.Provider>;
}

export function useHljsValue() {
  return useContext(HljsContext);
}