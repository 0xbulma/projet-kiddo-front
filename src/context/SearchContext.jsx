import { createContext, useState } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';

export const SearchContextSchema = createContext({
  userInput: null,
  isSearchOpen: null,
  initSearch: () => {},
  closeSearch: () => {},
  openSearch: () => {},
  setIsSearchOpen: () => {},
  setUserInput: () => {},
  clearUserInput: () => {},
});

function SearchContext(props) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  let location = useLocation();

  const [state, setState] = useState({
    userInput: '',
    isSearchOpen: false,

    initSearch: () => {
      navigate('/search');
    },

    closeSearch: () => {
      setState(sta => ({ ...sta, isSearchOpen: false }));
    },
    openSearch: () => {
      setState(sta => ({ ...sta, isSearchOpen: true }));
    },

    setIsSearchOpen: () => {
      setState(sta => {
        if (sta.isSearchOpen) {
          return { ...sta, isSearchOpen: false };
        }
        if (!sta.isSearchOpen) {
          return { ...sta, isSearchOpen: true };
        }
      });
    },

    setUserInput: input => {
      setState(sta => ({ ...sta, userInput: input }));
    },

    clearUserInput: () => {
      setState(sta => ({ ...sta, userInput: '' }));
    },
  });


  useDebounce(
    () => {
      if (state.userInput) {
        setSearchParams({ q: state.userInput });
      }
      if (state.userInput === ''){
        setSearchParams('');
      }
      if (location.pathname !== '/search' && state.userInput) {
        navigate(`/search?q=${state.userInput}`);
      }
    },
    500,
    [state.userInput]
  );

  return <SearchContextSchema.Provider value={state}>{props.children}</SearchContextSchema.Provider>;
}

export default SearchContext;
