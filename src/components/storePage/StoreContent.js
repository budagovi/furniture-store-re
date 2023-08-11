import style from './StoreContent.module.css';
import StoreItem from './StoreItem';
import StoreGridLayout from '../../Layout/StoreGrid';
import { Link, useParams, useRouteLoaderData, useLocation } from 'react-router-dom';
import PageButton from '../../UI/PageButton';
import { useEffect, useState } from 'react';


const StoreContent = () => {

  const currPage = useParams().page;
  const [page, setPage] = useState(currPage ? currPage : 1);

  useEffect(() => {
   setPage(currPage ? currPage : 1) 
   window.scrollTo(0, 0);
  }, currPage)

  const products = useRouteLoaderData('root');
  const pageProducts = products.slice(12*(page-1), 12*page);

  const pages = [];
  let i = Math.floor(products.length / 12);
  while(i--) pages.push(i+2);


  return (
    <>
      <StoreGridLayout>
          { pageProducts.length!==0 ? pageProducts.map(product => 
            <StoreItem 
              img={product.id} 
              name={product.name} 
              price={product.price}
              key={product.id}
            /> 
          ) : <span>No Products Found</span>}
        </StoreGridLayout>
        <div className={style.buttons}>
          <Link 
            to={`./${+page+1}`}>
            <PageButton>&rarr;</PageButton>
          </Link>
          {pages.map(page => 
            <Link 
              to={'./' + page} 
              key={page}>
              <PageButton>{page}</PageButton>
            </Link>
          )}
          <Link 
            to={'.'}>
            <PageButton>1</PageButton>
          </Link>
        </div>
      </>
  )
}

export default StoreContent;