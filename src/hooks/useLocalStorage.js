import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
      } else parsedItem = JSON.parse(localStorageItem);

      setItem(parsedItem);

    } catch (error) {
      setError(error);
    }
  }, [itemName, initialValue]);

  const saveItem = ( newList ) => {
    try {
      const stringList = JSON.stringify(newList);
      localStorage.setItem(itemName, stringList);
      setItem(newList);
    } catch (error) {
      setError(error);
    }
  }

  return { item, saveItem, error };
}

export default useLocalStorage;