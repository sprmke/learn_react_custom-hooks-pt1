import { useState, useEffect } from 'react';

const useCounter = (isIncremental = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isIncremental) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isIncremental]);

  return counter;
};

export default useCounter;
