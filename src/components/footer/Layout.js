import style from './Layout.module.css';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={style.wrapper}>
      <span className='preTitle'>CUSTOM SETUPS</span>
      <h1>Let’s build your dream working space</h1>
      <Link to='/furniture-store-react/store'>
        <Button>
          <span>Shop Now</span>
          <span>&rarr;</span>
        </Button>
      </Link>
    </div>
  )
}

export default Layout;