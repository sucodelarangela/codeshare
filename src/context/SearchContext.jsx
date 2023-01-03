import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  return <SearchContext.Provider
    value={{ query, setQuery }}
  >
    {children}
  </SearchContext.Provider>;
};

export function useSearchValue() {
  return useContext(SearchContext);
}