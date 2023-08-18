import style from './StoreItem.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {CartBucket} from '../../assets/Icons'
import { useDispatch } from 'react-redux';
import {actions as cartActions} from '../../store/CartSlice';

const StoreItem = ({img, name, price, rating, flag, item}) => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const addItemHandler = (e) => {
    e.stopPropagation();
    dispatch(cartActions.addItem({item, amount: 1}))
  }

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
      <div className={style.item}>
        {!flag && <CartBucket onClick={addItemHandler}/>}
        <Link to={`/furniture-store-react/product?id=${img}`} className={classes}>
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
        </Link>
      </div>
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