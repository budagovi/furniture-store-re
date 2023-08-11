import style from './StoreActions.module.css';
import { FilterIcon, Grid, GridHorizontal } from '../../assets/Icons';
import { useRouteLoaderData } from 'react-router-dom';
import StoreContent from './StoreContent';
import { useState } from 'react';
import StoreFilter from './StoreFilter';


const StoreActions = () => {

  const [sideNav, setSideNav] = useState(false);

  const products = useRouteLoaderData('root');
  const pages = [];

  let i = Math.ceil(products.length / 12);

  const sideMenuHandler = (e) => {
    setSideNav(prevState => !prevState);
  }

  return (
    <div className={style.wrapper}>
      <StoreFilter flag={sideNav} onBlurClick={sideMenuHandler}/>
      <span>Home / Shop</span>
      <h1>Shop</h1>
      <div className={style.actions}>
        <div className={style.filter} onClick={sideMenuHandler}>
          <FilterIcon/>
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