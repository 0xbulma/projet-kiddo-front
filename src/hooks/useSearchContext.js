import { useContext } from 'react';
import { SearchContextSchema } from '../context/SearchContext.jsx';

function useSearchContext(props) {
  const context = useContext(SearchContextSchema);

  if (context === undefined) {
    throw new Error('Context not found');
  }

  return context;
}

export default useSearchContext;
