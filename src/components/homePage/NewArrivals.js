import style from './NewArrivals.module.css';
import { useRouteLoaderData } from 'react-router-dom';
import StoreItem from '../storePage/StoreItem';
import StoreGridLayout from '../../Layout/StoreGrid';
import Button from '../../UI/Button';

const NewArrivals = () => {

  const products = useRouteLoaderData('root');

  return (
    <div className={style.wrapper}>
      <span className='preTitle'>NEW ARRIVALS</span>
      <h3>Boost your productivity</h3>
      <StoreGridLayout>
        {products.slice(0, 6).map(product => <StoreItem img={product.id} name={product.name} price={product.price} key={product.id} />)}
      </StoreGridLayout>
      <Button>
        <span>View All Products</span>
        <span>&rarr;</span>
      </Button>
    </div>
  )
}

export default NewArrivals;