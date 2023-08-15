import style from './SideCartItem.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {actions as cartActions} from '../../store/CartSlice';

const SideCartItem = ({item}) => {
  const [image, setImage] = useState('');
  const {id, name, price, qty} = item;

  useEffect(() => {
    const importImage = async () => {
      const response = await import(`../../assets/products/${id}.jpg`);
      setImage(response.default);
    }
    importImage();
  });

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(cartActions.addItem({item, amount: 1}));
  }

  const decrementHandler = () => {
    dispatch(cartActions.removeItemPiece({item}));
  }

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <div className={style.item}>
      <img src={image} />
      <div className={style.textHolder}>
        <div className={style.nameHolder}>
          <span>{name}</span>
          <div className={style.closeBtn} onClick={deleteItemHandler}>&#10005;</div>
        </div>
        <div className={style.itemActions}>
          <div className={style.amountWrapper}>
            <button onClick={decrementHandler}>-</button>
            <div>{qty}</div>
            <button onClick={incrementHandler}>+</button>
          </div>
          <span className={style.price}>${(price*qty).toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default SideCartItem;