import style from './Header.module.css';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <header className={style.wrapper}>
      <div id='background' className={style.background}>
        <div className={style.textHolder}>
          <span className='preTitle'>HOME OFFICE  FURNITURE</span>
          <h1>Stay productive and get more work done!</h1>
          <Link to='store'>
            <Button>
              <span>Shop Collecliton</span>
              <span>&rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader;