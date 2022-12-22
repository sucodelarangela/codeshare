import { createContext, useContext, useState } from 'react';
import * as hljs from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HljsContext = createContext();

export function HljsProvider({ children }) {
  const languages = [
    'bash',
    'c',
    'csharp',
    'css',
    'dart',
    'django',
    'elixir',
    'go',
    'html',
    'java',
    'javascript',
    'json',
    'kotlin',
    'less',
    'lua',
    'markdown',
    'php',
    'phpTemplate',
    'powershell',
    'python',
    'ruby',
    'rust',
    'scss',
    'shell',
    'typescript',
    'xml'
  ];
  const hljsKeys = Object.keys(hljs);
  const [hlStyle, setHlStyle] = useState(hljs.a11yDark);
  const [language, setLanguage] = useState('');

  return <HljsContext.Provider value={{ hljs, hljsKeys, hlStyle, setHlStyle, language, setLanguage, languages }}>{children}</HljsContext.Provider>;
}

export function useHljsValue() {
  return useContext(HljsContext);
}