import style from './Links.module.css';

import { Logo, Facebook, Twitter, Instagram, YouTube } from '../../assets/Icons';
import { NavLink, useLocation, Link } from 'react-router-dom';

const Links = () => {

  const { pathname } = useLocation();

  const scroll = (route) => {
    if (pathname === route)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }

  return (
    <div className={style.wrapper}>
      <div className={style.section}>
        <div className={style.linkWrapper} onClick={() => scroll('/furniture-store-react')}>
          <NavLink
            to='/furniture-store-react'
            className={({ isActive }) => isActive ? style.active : undefined}
            end>
            <Logo color='black' />
          </NavLink>
        </div>
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
          <div className={style.linkWrapper} onClick={() => scroll('/furniture-store-react/about')}>
            <NavLink
              to='/furniture-store-react/about'
              className={({ isActive }) => isActive ? style.active : undefined}>About Us
            </NavLink>
          </div>
          <div className={style.linkWrapper} onClick={() => scroll('/furniture-store-react/contact')}>
            <NavLink
              to='/furniture-store-react/contact'
              className={({ isActive }) => isActive ? style.active : undefined}>Contact Us
            </NavLink>
          </div>
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