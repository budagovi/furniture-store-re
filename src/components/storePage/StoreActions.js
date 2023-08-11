import style from './StoreActions.module.css';
import { FilterIcon, Grid, GridHorizontal } from '../../assets/Icons';
import { useRouteLoaderData } from 'react-router-dom';
import StoreContent from './StoreContent';


const StoreActions = () => {

  const products = useRouteLoaderData('root');
  const pages = [];

  let i = Math.ceil(products.length / 12);

  return (
    <div className={style.wrapper}>
      <span>Home / Shop</span>
      <h1>Shop</h1>
      <div className={style.actions}>
        <div className={style.filter}>
          <FilterIcon />
          <span>Filter</span>
        </div>
        <div className={style.grid}>
          <select name="sorting" id="sorting">
            <option value="default">Default Sorting</option>
            <option value="popularity">Sort by Popularity</option>
            <option value="priceAsc">Sort by Price: Low to High</option>
            <option value="priceDesc">Sort by Price: High to Low</option>
          </select>
          <Grid />
          <GridHorizontal />
        </div>
      </div>
      <StoreContent />
    </div>
  )
}

export default StoreActions;