import style from './StoreItem.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StoreItem = ({img, name, price, rating, flag}) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const importImage = async () => {
      const response = await import(`../../assets/products/${img}.jpg`);
      setImage(response.default);
    }
    importImage()
  })
  
  let classes = style.wrapper;
  if(flag) classes = style.grid;

  return (
    <Link to={`/furniture-store-react/product?id=${img}`}>
      <div className={classes}>
        <img src={image} />
        <div className={style.textHolder}>
          <span>{name}</span>
          <span>${price.toFixed(2)}</span>
          {flag ? <>
            <span>
              Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, 
              nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas 
              magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
            </span>
            <span>rating: {rating}</span>
          </>: null}
        </div>
      </div>
    </Link>
  )

  return (
    <div className={style.wrapper}>
      <img src={image} />
      <div className={style.textHolder}>
        <span>{name}</span>
        <span>${price.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default StoreItem;