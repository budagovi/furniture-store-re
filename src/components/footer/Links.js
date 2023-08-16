import style from './Links.module.css';

import { Logo, Facebook, Twitter, Instagram, YouTube } from '../../assets/Icons';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.section}>
        <Link to='/furniture-store-react'>
          <Logo color='black'/>
        </Link>
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
          <Link to='/furniture-store-react/about'>About Us</Link>
          <Link to='/furniture-store-react/contact'>Contact Us</Link>
          <span>Careers</span>
          <span>Customer Support</span>
        </div>
      </div>
      <div className={style.section}>
        <h5>Categories</h5>
        <div className={style.links}>
          <Link to='/furniture-store-react/store/tables/1'>Tables</Link>
          <Link to='/furniture-store-react/store/chairs/1'>Chairs</Link>
          <Link to='/furniture-store-react/store/tables/1'>Cabinets</Link>
          <Link to='/furniture-store-react/store/monitor-stands/1'>Laptop Stands</Link>
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