import { useRouteLoaderData, useSearchParams } from 'react-router-dom';
import style from './ProductWrapper.module.css';
import { useState, useEffect } from 'react';
import CartActions from './CartActions';
const ProductWrapper = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const products = useRouteLoaderData('root');

  const id = searchParams.get('id')
  const product = products.find(item => item.id === id);
  
  const [image, setImage] = useState('');

  useEffect(() => {
    const importImage = async () => {
      const response = await import(`../../assets/products/${id}.jpg`);
      setImage(response.default);
    }
    importImage()
  })

  return (
    <div className={style.wrapper}>
      <img src={image}></img>
      <div className={style.textHolder}>
        <span>{product.category}</span>
        <h4>{product.name}</h4>
        <span> 
          <span className={style.price}>${product.price}</span> & free Shipping
        </span>
        <span>
          Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, 
          nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas 
          magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
        </span>
        <CartActions />
      </div>
    </div>
  )
}

export default ProductWrapper;