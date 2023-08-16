import style from './Actions.module.css';
import { FilterIcon} from '../../assets/Icons';
import { Link, useParams } from 'react-router-dom';
import Content from './Content';
import { useState } from 'react';
import Filter from './Filter';
import Sort from './Sort';


const StoreActions = () => {

  const [sideNav, setSideNav] = useState(false);
  const [sortID, setSortID] = useState('default');
  const [gridFlag, setGridFlag] = useState(false);

  let category = useParams().category;
  if(category) {
    let section = ''
    category = category.replace('-', ' ');
    for(let i = 0; i<category.length; i++) {
      if(i===0 || category[i-1]===' ') {
        section += category[i].toUpperCase();
      } else {
        section += category[i];
      }
    }
    category = section;
  }

  const storeSection = !category ? 'Shop' : category;

  const sideMenuHandler = (text) => {
    setSideNav(prevState => !prevState);
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