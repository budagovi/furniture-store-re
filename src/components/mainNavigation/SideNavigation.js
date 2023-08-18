import style from './SideNavigation.module.css';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../assets/Icons';
import NavSearchForm from './NavSearchForm';
import { useEffect, useState } from 'react';

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

  return (
    <div className={wrapperClasses}>
      <ul className={listClasses}>
        <li className={style.logoLink}>
          <NavLink 
            to='/furniture-store-react'
            onClick={navigateHandler}>
            <Logo color='black'/>
          </NavLink>
        </li>
        <li>
          <NavSearchForm onClick={navigateHandler}/>
        </li>
        <li className={style.linkText}>
          <NavLink
            to='/furniture-store-react/store'
            onClick={navigateHandler}>
            Store
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink 
            to='/furniture-store-react/office-setups' 
            onClick={navigateHandler}>
            Office
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink
            to='/furniture-store-react/home-office-setups' 
            onClick={navigateHandler}>
            Home Office
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink 
            to='/furniture-store-react/about' 
            onClick={navigateHandler}>
            About
          </NavLink>
        </li>
        <li className={style.linkText}>
          <NavLink 
            to='/furniture-store-react/contact'
            onClick={navigateHandler}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={style.blur} onClick={sideNavHandler}></div>
    </div>
  )
}

export default SideNavigation;