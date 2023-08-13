import { useState } from 'react';
import style from './CartActions.module.css';

const CartActions = () => {

  const [amount, setAmount] = useState(1);

  const removeItemHandler = () => {
    if (amount === 1) return;
    setAmount(prevState => prevState-1);
  }

  const addItemHandler = () => {
    setAmount(prevState => prevState+1);
    console.log('lukaaa');
  }

  return (
    <div className={style.wrapper}>
      <div className={style.amountWrapper}>
        <button onClick={removeItemHandler}><div>-</div></button>
        <span>{amount}</span>
        <button onClick={addItemHandler}><div>+</div></button>
      </div>
      <button className={style.addToCartBtn}>Add to Cart</button>
    </div>
  )
}

export default CartActions;