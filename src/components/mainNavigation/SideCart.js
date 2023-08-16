import style from './SideCart.module.css';
import { useEffect, useState } from 'react';
import SideCartItem from './SideCartItem';
import Button from '../../UI/Button';
import { UseSelector, useSelector } from 'react-redux';

const SideCart = ({ flag, onBlurClick }) => {

  const [wrapperClasses, setWrapperClasses] = useState(style.wrapper);
  const [listClasses, setListClasses] = useState(style.list);

  const cartItems = useSelector(state => state.items);
  const total = useSelector(state => state.totalPrice)

  useEffect(() => {
    if (flag) {
      setWrapperClasses(`${style.wrapper} ${style.toggle}`);
      setListClasses(style.list);
    }
  }, [flag]);

  const sideNavHandler = () => {
    setListClasses(`${style.list} ${style.toggleList}`);
    setTimeout(() => {
      setWrapperClasses(style.wrapper);
      onBlurClick();
    }, 400);
  }


  const cartContent = (
    <>
      <ul>
        {cartItems.map(item =>
          <li key={item.id}>
            <SideCartItem item={item} />
          </li>
        )}
      </ul>
      <header>
        <span>Subtotal:</span>
        <div className={style.closingBtn}>${total.toFixed(2)}</div>
      </header>
      <div className={style.buttons}>
        <Button>Checkout</Button>
      </div>
    </>
  )

  const emptyCartContent = (
    <>
      <ul className={style.emptyCart}>
        <li>No products in the cart.</li>
      </ul>
      <div className={style.buttons}>
        <Button>Start Shopping</Button>
      </div>
    </>
  )
  return (
    <div className={wrapperClasses}>
      <div onClick={sideNavHandler}></div>
      <div className={listClasses}>
        <header>
          <span>Shopping Cart</span>
          <div className={style.closeBtn} onClick={sideNavHandler}>&#10005;</div>
        </header>
        {cartItems.length !== 0 ? cartContent : emptyCartContent}
      </div>
    </div>
  )
}

export default SideCart;