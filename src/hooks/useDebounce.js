/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useTimeout from './useTimout';

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
