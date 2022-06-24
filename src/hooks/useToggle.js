import { useState } from 'react';

export default function useToogle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue));
  }

  return [value, toggleValue];
}
