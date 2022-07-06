import { useContext } from 'react';
import { AuthContextSchema } from '../context/AuthContext.jsx';

function useAuthContext(props) {
  const context = useContext(AuthContextSchema);

  if (context === undefined) {
    throw new Error('Context not found');
  }

  return context;
}

export default useAuthContext;
