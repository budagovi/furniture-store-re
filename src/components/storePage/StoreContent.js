import style from './StoreContent.module.css';
import { FilterIcon, Grid, GridHorizontal } from '../../assets/Icons';
import StoreItem from './StoreItem';
import StoreGridLayout from '../../Layout/StoreGrid';
import { useRouteLoaderData } from 'react-router-dom';
import PageButton from '../../UI/PageButton';


const StoreContent = () => {

  const products = useRouteLoaderData('root');

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
      <StoreGridLayout>
        {products.map(product => 
          <StoreItem 
            img={product.id} 
            name={product.name} 
            price={product.price}
            key={product.id}
          />
        )}
      </StoreGridLayout>
      <div class={style.buttons}>
        <PageButton text={'1'} />
        <PageButton text={'2'} />
        <PageButton />
      </div>
    </div>
  )
}

export default StoreContent;