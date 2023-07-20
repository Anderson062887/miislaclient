import { useState, useEffect } from 'react';

const useBrowserSize = () => {
  const [currentWidth, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      console.log('remove window size listener');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return currentWidth;
};

export default useBrowserSize;

