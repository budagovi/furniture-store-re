import style from './FormTextHolder.module.css';
import {AddressPoint, TelephoneIcon, MailIcon, Clock} from '../../assets/Icons';

const FormTextHolder = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.textHolder}>
        <AddressPoint />
        <span>Address</span>
        <section></section>
        <span>123 Demo St, San Francisco, CA 45678, United States</span>
      </div>
      <h6>Customer service</h6>
      <p>Diam id quis quam pulvinar sodales fermentum, elit risus tristique praesent sit dictumst vel amet.</p>
      <div className={style.textHolder}>
        <TelephoneIcon />
        <span>+1 123-456-7890</span>
      </div>
      <div className={style.textHolder}>
        <MailIcon />
        <span>mail@example.com</span>
      </div>
      <div className={style.textHolder}>
        <Clock />
        <span>08.00 - 16.00 EST</span>
      </div>
    </div>
  )
}

export default FormTextHolder;