import style from './StoreGrid.module.css';

const StoreGridLayout = ({children, flag}) => {
  let classes = style.grid;
  if(flag) classes = style.grid2;

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default StoreGridLayout;