"use client"
import { useState, useEffect } from 'react';

export const useHash = () => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    // Check if window is defined
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
      const onHashChange = () => {
        setHash(window.location.hash);
      };
      window.addEventListener('hashchange', onHashChange);
      return () => window.removeEventListener('hashchange', onHashChange);
    }
  }, []);

  return hash;
};