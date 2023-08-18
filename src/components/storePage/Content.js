import StoreItem from './StoreItem';
import StoreGridLayout from '../../Layout/StoreGrid';
import { useParams, useRouteLoaderData, useActionData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageButtons from './PageButtons';


const StoreContent = ({sortID, flag}) => {

  const currPage = useParams().page;
  const currCategory = useParams().category;
  const [page, setPage] = useState(currPage ? currPage : 1);
  const [category, setCategory] = useState(currCategory ? currCategory : '');

  useEffect(() => {
   setPage(currPage ? currPage : 1) 
   setCategory(currCategory ? currCategory : '');
  }, [currPage, currCategory])

  let products = useRouteLoaderData('root');
  const q = useActionData();

  //filter by query search if exists
    products = products.filter(item => q ? item.name.toLowerCase().includes(q) : item)
  //filter by category
  products = products.filter(item => category ? item.category === category : item)
  
  //sort 
  switch(sortID) {
    case 'default':
      products = products.sort( (a,b) => a.id.slice(1) - b.id.slice(1));
      break;
    case 'popularity':
      products = products.sort( (a,b) => a.popularity - b.popularity);
      break;
    case 'priceAsc':
      products = products.sort( (a,b) => a.price - b.price);
      break;
    case 'priceDesc':
      products = products.sort( (a,b) => b.price - a.price);
      break;
  }

  //determine how manu pages needed
  let i = Math.ceil(products.length / 12);

  //take only 12 pieces of products
  products = products.slice(12*(page-1), 12*page);
  
  return (
    <>
      <StoreGridLayout flag={flag}>
          { products.length!==0 ? products.map(product => 
            <StoreItem 
              item={product}
              img={product.id} 
              name={product.name} 
              price={product.price}
              key={product.id}
              rating={product.popularity}
              flag={flag}
            /> 
          ) : <span>No Products Found</span>}
        </StoreGridLayout>
        <PageButtons pagesNum={i} currPage={page}/>
      </>
  )
}

export default StoreContent;