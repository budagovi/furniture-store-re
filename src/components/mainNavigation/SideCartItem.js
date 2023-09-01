import style from './SideCartItem.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {actions as cartActions} from '../../store/CartSlice';

const SideCartItem = ({item}) => {
  const [image, setImage] = useState('');
  const {id, name, price, qty} = item;

  const op = useSelector(state => state.operation);

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
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <div className={style.item}>
      <img src={image} />
      <div className={style.textHolder}>
        <div className={style.nameHolder}>
          <span>{name}</span>
          <button disabled={op} className={style.closeBtn} onClick={deleteItemHandler}>&#10005;</button>
        </div>
        <div className={style.itemActions}>
          <div className={style.amountWrapper}>
            <button disabled={op} onClick={decrementHandler}>-</button>
            <div>{qty}</div>
            <button disabled={op} onClick={incrementHandler}>+</button>
          </div>
          <span className={style.price}>${(price*qty).toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default SideCartItem;