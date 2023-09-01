import style from './CartStateBar.module.css';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {actions} from '../store/CartSlice';

const CartStateBar = () => {
  const [isHighlited, setIsHighlited] = useState(null);
  const op = useSelector(state => state.operation);
  const dispatch = useDispatch();
  const classes = `${style.wrapper} ${ isHighlited === 'add' ? style.adding : ''} ${ isHighlited === 'remove' ? style.removing : ''}`;
  let message = 'add item to cart';
  if (isHighlited === 'remove') message = 'remove item from cart'

  useEffect(()=> {
    if(op==='adding') 
      setIsHighlited('add');  

    if(op==='removing') 
      setIsHighlited('remove');
    
    const timer =  setTimeout(()=> {
      setIsHighlited(false);
      dispatch(actions.emptyOperation());
    }, 900)

    return () => {
      clearTimeout(timer);
    }
  }, [op])
  return (
    <div className={classes}>
      <span>{message}</span>
    </div>
  ) 
}

export default CartStateBar;