import { createContext } from "react";

export const CardContext = createContext([]);

export type StorageType = {
  img: string,
  name: string,
  price: number,
  quantity: number,
};

export type setterProps = {
  img: string,
  name: string,
  price: number,
  quantity: number,
};