import { createContext, useContext, useState } from 'react';
import * as hljs from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HljsContext = createContext();

export function HljsProvider({ children }) {
  const hljsKeys = Object.keys(hljs);
  const [hlStyle, setHlStyle] = useState(hljs.a11yDark);

  return <HljsContext.Provider value={{ hljs, hljsKeys, hlStyle, setHlStyle }}>{children}</HljsContext.Provider>;
}

export function useHljsValue() {
  return useContext(HljsContext);
}