import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      if (savedValue) {
        return JSON.parse(savedValue);
      }
      return initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}


export default function  StorageHook() {
  const [userId, setUserId] = useLocalStorage("user_id");

  useEffect(() => {
    setUserId("john_doe");
  }, []);

  return <h1>{userId}</h1>;
}