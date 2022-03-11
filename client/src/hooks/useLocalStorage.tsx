


import { useEffect, useState } from "react";

const PREFIX = "inscript-";

export default function useLocalStorage(key: string, initialValue: {}) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    
    if(jsonValue != null) return JSON.parse(jsonValue)
    
    if(typeof initialValue === "function") {
      return initialValue();
    } 
    else return initialValue
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [value, setValue]);
}