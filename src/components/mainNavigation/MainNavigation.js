import style from './MainNavigation.module.css';
import { Logo, CartIcon, PersonIcon, MenuIcon } from '../../assets/Icons';
import NavSearchForm from './NavSearchForm';
import { NavLink, useLocation, useNavigation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideNavigation from './SideNavigation';
import SideCart from './SideCart';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MainNavigation = () => {

  const { pathname } = useLocation();
  const [flag, setFlag] = useState();
  const [sideNav, setSideNav] = useState(false);
  const [sideCart, setSideCart] = useState(false);
  const navigation = useNavigation();

  const cartAmount = useSelector(state => state.amount);

  useEffect(() => {
    if (document.getElementById('background'))
      setFlag(true)
    else
      setFlag(false)

    if(sideNav) setSideNav(false);
  }, [pathname])

  useEffect(() => {
    if (navigation.state === 'loading') {
      setFlag(false)
    }
  }, [navigation.state])

  let classes = style.navWrapper;
  if (flag) classes = `${style.navWrapper} ${style.absolute}`

  const sideMenuHandler = (e) => {
    setSideNav(prevState => !prevState);
  }

  const sideCartHandler = (e) => {
    setSideCart(prevState => !prevState);
  }

  return (
    <nav className={classes}>
      <SideNavigation flag={sideNav} onBlurClick={sideMenuHandler}/>
      <SideCart flag={sideCart} onBlurClick={sideCartHandler}/>
      <ul className={style.list}>
        <li className={style.logoLink}>
          <NavLink 
            to='/furniture-store-react' 
            className={({ isActive }) => isActive ? style.active : undefined}
            end>
            <Logo color={flag ? '' : 'black'} />
          </NavLink>
        </li>
        <li>
          <NavLink to='/furniture-store-react/store'>Store</NavLink>
        </li>
        <li>
          <NavLink 
            to='/furniture-store-react/office-setups' 
            className={({ isActive }) => isActive ? style.active : undefined}>Office
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furniture-store-react/home-office-setups'
            className={({ isActive }) => isActive ? style.active : undefined}>Home Office
          </NavLink>
        </li>
      </ul>
      <div className={style.actions}>
        <ul className={style.list}>
          <li>
            <NavLink 
              to='/furniture-store-react/about'
              className={({ isActive }) => isActive ? style.active : undefined}>About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/furniture-store-react/contact'
              className={({ isActive }) => isActive ? style.active : undefined}>Contact
            </NavLink>
          </li>
          <li>
            <NavSearchForm />
          </li>
          <li>
            <div className={style.iconHolder}>
              <CartIcon onClick={sideCartHandler}/>
              <div className={style.counter}>{cartAmount}</div>
            </div>
          </li>
          <li className={style.menu}>
            <MenuIcon onClick={sideMenuHandler}/>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MainNavigation;