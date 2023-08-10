import style from './Links.module.css';

import { Logo, Facebook, Twitter, Instagram, YouTube } from '../../assets/Icons';

const Links = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.section}>
        <Logo color='black'/>
        <div className={style.icons}>
          <Facebook />
          <Twitter />
          <Instagram />
          <YouTube />
        </div>
      </div>
      <div className={style.section}>
        <h5>About Us</h5>
        <div className={style.links}>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Careers</span>
          <span>Customer Support</span>
        </div>
      </div>
      <div className={style.section}>
        <h5>Categories</h5>
        <div className={style.links}>
          <span>Table</span>
          <span>Chairs</span>
          <span>Cabinets</span>
          <span>Laptop Stands</span>
        </div>
      </div>
      <div className={style.section}>
        <h5>Information</h5>
        <div className={style.links}>
          <span>FAQs</span>
          <span>Refund Policy</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  )
}

export default Links;