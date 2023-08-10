import style from './Layout.module.css';
import Button from '../../UI/Button';

const Layout = () => {
  return (
    <div className={style.wrapper}>
      <span className='preTitle'>CUSTOM SETUPS</span>
      <h1>Let’s build your dream working space</h1>
      <Button>
        <span>Shop Now</span>
        <span>&rarr;</span>
      </Button>
    </div>
  )
}

export default Layout;