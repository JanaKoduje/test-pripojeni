import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(
    () => {
        window.addEventListener('offline', handleOffline)
        window.addEventListener('online', handleOnline)
        console.log('mounted')

        return () => {
          console.log('unmounted')
          window.removeEventListener('offline', handleOffline)
          window.removeEventListener('online', handleOnline)
        }
    }, []

  )

  const handleOffline = () => {
    setIsOnline(false)
    console.log('jste offline')
  }

  const handleOnline = () => {
    setIsOnline(true)
    console.log('jste online')
  }

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  };

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;