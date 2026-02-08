import { createContext, type Dispatch, type SetStateAction } from "react";

export type StorageType = {
  img: string,
  name: string,
  price: number,
  quantity: number,
};

export type Props = {
  children: React.ReactNode,
};

export type CartContextType = {
  storage: StorageType[],
  setStorage: Dispatch<SetStateAction<Array<StorageType>>>,
};

export const CardContext = createContext<CartContextType | undefined>(undefined);