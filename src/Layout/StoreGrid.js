import style from './StoreGrid.module.css';

const StoreGridLayout = ({children}) => {
  return (
    <div className={style.grid}>
      {children}
    </div>
  )
}

export default StoreGridLayout;