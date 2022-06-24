/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

//Simple useEffect but doensn"t render the first time
export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
}
