import style from './Links.module.css';
import Layout from "./Layout";
import Links from "./Links";

const Footer = () => {
  return (
    <>
      <Layout />
      <Links />
      <p className={style.copyRight}>Copyright © 2023 Office Furniture Store</p>
    </>
  )
}

export default Footer;