import style from './MainNavigation.module.css';
import { Logo, CartIcon, PersonIcon, MenuIcon } from '../../assets/Icons';
import NavSearchForm from './NavSearchForm';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MainNavigation = () => {

  const {pathname} = useLocation();
  const [flag, setFlag] = useState()
  
  useEffect(() => {
    if(document.getElementById('background'))
      setFlag(true)
    else
      setFlag(false)
  }, [pathname])

  let classes = style.navWrapper;
  if(flag) classes = `${style.navWrapper} ${style.absolute}`

  return (
    <nav className={classes}>
      <ul className={style.list}>
        <li className={style.logoLink}>
          <NavLink to='/furniture-store-react'>
            <Logo color={flag ? '' : 'black'}/>
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink to='/furniture-store-react/store'>Store</NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink to='/furniture-store-react/office-setups'>Office</NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink to='/furniture-store-react/home-office-setups'>Home Office</NavLink>
        </li>
      </ul>
      <div className={style.actions}>
        <ul className={style.list}>
          <li className={style.linkText}>
            <NavLink to='/furniture-store-react/about'>About</NavLink>
          </li>
          <li className={style.linkText}>
            <NavLink to='/furniture-store-react/contact'>Contact</NavLink>
          </li>
          <li>
            <NavSearchForm />
          </li>
          <li>
            <div className={style.iconHolder}>
              <CartIcon />
              <div className={style.counter}>999</div>
            </div>
          </li>
          <li><PersonIcon /></li>
          <li className={style.menu}><MenuIcon /></li>
        </ul>
      </div>

    </nav>
  )
}

export default MainNavigation;