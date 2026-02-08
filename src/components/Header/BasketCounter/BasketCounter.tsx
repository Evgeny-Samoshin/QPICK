import { useStorageContext } from '../../../context/useStorageContext';
import style from './style.module.css';

export const BasketCounter = () => {
  const {storage} = useStorageContext();
  const quantityItems = storage.reduce((acc, curr) => {
    return acc += curr.quantity
  }, 0);  

  return (
    <span className={style.counter}>
      {quantityItems}
    </span>
  )
}