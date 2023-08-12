import style from './Actions.module.css';
import { FilterIcon, Grid, GridHorizontal } from '../../assets/Icons';
import { Link, useRouteLoaderData } from 'react-router-dom';
import Content from './Content';
import { useState } from 'react';
import Filter from './Filter';
import Sort from './Sort';


const StoreActions = () => {

  const [sideNav, setSideNav] = useState(false);
  const [category, setCategroy] = useState();
  const [sortID, setSortID] = useState('default');
  const [gridFlag, setGridFlag] = useState(false);

  const storeSection = !category || category==='All' ? 'Shop' : category;

  const sideMenuHandler = (text) => {
    setSideNav(prevState => !prevState);
    if(!text) return;
    if(!text.target)
      setCategroy(text);
  }

  const sortProductsHandler = (sortId) => {
    setSortID(sortId);
  }

  const gridLayoutHandler = (flag) => {
    setGridFlag(flag);
  }

  return (
    <div className={style.wrapper}>
      <Filter flag={sideNav} onBlurClick={sideMenuHandler}/>
      <span><Link to='/furniture-store-react'>Home</Link> / {storeSection}</span>
      <h1>{storeSection}</h1>
      <div className={style.actions}>
        <div className={style.filter} onClick={sideMenuHandler} id='filter'>
          <FilterIcon/>
          <span>Filter</span>
        </div>
        <Sort onSort={sortProductsHandler} onGridLayout={gridLayoutHandler} flag={gridFlag}/>
      </div>
      <Content sortID={sortID} category={category} flag={gridFlag}/>
    </div>
  )
}

export default StoreActions;