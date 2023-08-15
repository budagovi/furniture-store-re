import { useEffect, useState } from 'react';
import style from './CartActions.module.css';
import { useDispatch } from 'react-redux';
import {actions as cartActions} from '../../store/CartSlice';
import { useSearchParams } from 'react-router-dom';

const CartActions = ({item}) => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(1);

  const decrementHandler = () => {
    if (amount === 1) return;
    setAmount(prevState => prevState-1);
  }

  const incrementHandler = () => {
    if (amount === 999) return;
    setAmount(prevState => prevState+1);
  }

  const addHandler = () => {
    dispatch(cartActions.addItem({item, amount}));
  }

  useEffect(() => {
    setAmount(1);
  }, [searchParams.get('id')])
  return (
    <div className={style.wrapper}>
      <div className={style.amountWrapper}>
        <button onClick={decrementHandler}>-</button>
        <div><span>{amount}</span></div>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button className={style.addToCartBtn} onClick={addHandler}>Add to Cart</button>
    </div>
  )
}

export default CartActions;