import style from './Links.module.css';
import Layout from "./Layout";
import Links from "./Links";

const Footer = () => {
  return (
    <div style={{backgroundColor: '#f8f8f8'}}>
      <Layout />
      <Links />
      <p className={style.copyRight}>Copyright © 2023 Office Furniture Store</p>
    </div>
  )
}

export default Footer;