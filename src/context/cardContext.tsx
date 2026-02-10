import { createContext, type Dispatch, type SetStateAction } from "react";

export interface StorageType {
  img: string,
  name: string,
  price: number,
  quantity: number,
};

export interface CardType extends StorageType {
  rate: number,
}

export type Props = {
  children: React.ReactNode,
};

export type CartContextType = [
  StorageType[],
  Dispatch<SetStateAction<Array<StorageType>>>,
];

export const CardContext = createContext<CartContextType | undefined>(undefined);