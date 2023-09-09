import style from './SideNavigation.module.css';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../assets/Icons';
import NavSearchForm from './NavSearchForm';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SideNavigation = ({ flag, onBlurClick }) => {

  const [wrapperClasses, setWrapperClasses] = useState(style.wrapper);
  const [listClasses, setListClasses] = useState(style.list);

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

  const navigateHandler = () => {
    setWrapperClasses(style.wrapper);
    onBlurClick();
  }
  const { pathname } = useLocation();

  useEffect(() => {
    if(flag)
      navigateHandler();
  }, [pathname])

  return (
    <div className={wrapperClasses}>
      <ul className={listClasses}>
        <li className={style.logoLink}>
          <NavLink to='/furniture-store-react'>
            <Logo color='black'/>
          </NavLink>
        </li>
        <li>
          <NavSearchForm />
        </li>
        <li className={style.linkText}>
          <NavLink to='/furniture-store-react/store'>
            Store
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink to='/furniture-store-react/office-setups'>
            Office
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink to='/furniture-store-react/home-office-setups'>
            Home Office
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink to='/furniture-store-react/about'>
            About
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink to='/furniture-store-react/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={style.blur} onClick={sideNavHandler}></div>
    </div>
  )
}

export default SideNavigation;