import style from './Offers.module.css';
import {Truck, Clock, Money, GiftBox} from '../../assets/Icons'

const Offers = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.offer}>
        <Truck />
        <div className={style.textHolder}>
          <span>Free Shipping</span>
          <span>Lorem ipsum amet consectetur</span>
        </div>
      </div>
      <div className={style.offer}>
        <Clock />
        <div className={style.textHolder}>
          <span>Support 24/7</span>
          <span>Lorem ipsum amet consectetur</span>
        </div>
      </div>
      <div className={style.offer}>
        <Money />
        <div className={style.textHolder}>
          <span>Money return</span>
          <span>Lorem ipsum amet consectetur</span>
        </div>
      </div>
      <div className={style.offer}>
        <GiftBox />
        <div className={style.textHolder}>
          <span>Member discount</span>
          <span>Lorem ipsum amet consectetur</span>
        </div>
      </div>
    </div>
  )
}

export default Offers;