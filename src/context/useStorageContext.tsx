import { useContext } from "react";
import { CardContext } from "./cardContext";

export const useStorageContext = () => {
  const storage = useContext(CardContext);

  if (!storage) {
    throw new Error(`Storage is undefined`);
  }

  return storage;
};