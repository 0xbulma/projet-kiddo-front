import { useState } from 'react';
import useDebounce from './useDebounce';

function DebounceComponentExemple() {
  const [count, setCount] = useState(10);

  //useDebounce(Callback function, ms time, param effect for trigger timer)
  useDebounce(() => alert('Trigger debounce'), 1000, [count]);
  //Trigger callback function 1s after count is modified

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Incrémenter</button>
    </div>
  );
}

export default DebounceComponentExemple;
