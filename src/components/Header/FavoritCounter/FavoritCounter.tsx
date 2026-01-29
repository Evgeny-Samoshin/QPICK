import style from './style.module.css';

export const FavoritCounter = () => {
  const storage = [];

  return (
    <span className={style.counter}>
      {storage.length}
    </span>
  )
}