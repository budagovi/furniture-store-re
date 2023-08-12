import style from './Sort.module.css';
import { Grid, GridHorizontal, ArrowDown } from '../../assets/Icons';

const Sort = ({onSort, onGridLayout, flag}) => {

  const sortHandler = (e) => {
    onSort(e.target.value);
  }

  const gridLayoutHandler = (e) => {
    let flag;
    if(e.target.id) 
      flag = false;
    else
      flag = true;
    console.log(e.target.id);
    onGridLayout(flag);
  }
  return (
    <div className={style.grid}>
      <label htmlFor='sorting'>
        <select name="sorting" id="sorting" onChange={sortHandler}>
          <option value="default">Default Sorting</option>
          <option value="popularity">Sort by Popularity</option>
          <option value="priceAsc">Sort by Price: Low to High</option>
          <option value="priceDesc">Sort by Price: High to Low</option>
        </select>
        <ArrowDown/>
      </label>
      <Grid onClick={gridLayoutHandler} color={!flag && '#fbd84b'}/>
      <GridHorizontal onClick={gridLayoutHandler} color={flag && '#fbd84b'}/>
    </div>
  )
}

export default Sort;