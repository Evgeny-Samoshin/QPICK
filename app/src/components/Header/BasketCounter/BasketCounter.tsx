import style from './style.module.css';
import { useContext } from 'react';
import { CardContext, type StorageType } from '../../../context/cardContext';

export const BasketCounter = () => {
  const storage: StorageType[] = useContext(CardContext);
  const quantityItems = storage.reduce((acc, curr) => {
    return acc += curr.quantity
  }, 0);  

  return (
    <span className={style.counter}>
      {quantityItems}
    </span>
  )
}