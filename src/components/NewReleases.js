import { useRouteLoaderData } from 'react-router-dom';
import StoreItem from './storePage/StoreItem'
import style from './NewReleases.module.css';


const NewReleases = ({title, index}) => {

  const products = useRouteLoaderData('root');

  return (
    <div className={style.wrapper}>
      <div className={style.actions}>
        <h4>{title}</h4>
        <a className='lined yellowLine'>View All &rarr;</a>
      </div>
      <div className={style.grid}>
        {products.slice(index, index+4).map( product => 
          <StoreItem 
            img={product.id} 
            name={product.name} 
            price={product.price}
            key={product.id}
          />
        )}
      </div>
    </div>
  )
}

export default NewReleases;