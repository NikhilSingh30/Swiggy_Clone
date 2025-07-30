import { useState, useEffect } from "react";

const useStatus = () => {
  
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline  = () => setOnline(true);
    const goOffline = () => setOnline(false);

   
    window.addEventListener("online",  goOnline);
    window.addEventListener("offline", goOffline);

    
    return () => {
      window.removeEventListener("online",  goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return online;
};

export default useStatus;
