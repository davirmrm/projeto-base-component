import { useEffect } from 'react';

export const UseOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(false);
    }
    // else {
    //   callback(true)
    // }
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 100);
    return () => {
      document.removeEventListener('click', handleClick);
    };

  });
};
