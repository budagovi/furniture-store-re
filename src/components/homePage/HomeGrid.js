import style from './HomeGrid.module.css';
import { Link } from 'react-router-dom';

const HomeGrid = () => {
  return (
    <div className={style.grid}>
      <div className={`${style.product1} ${style.product}`}>
        <Link to='store/monitor-stands/1'>Monitor Stands &rarr;</Link>
      </div>
      <div className={`${style.product2} ${style.product}`}>
        <Link to='store/tables/1'>Wooden Desks &rarr;</Link>
      </div>
      <div className={`${style.product3} ${style.product}`}>
        <Link to='store/chairs/1'>Office Chairs &rarr;</Link>
      </div>
    </div>
  )
}

export default HomeGrid