import style from './HomeGrid.module.css';

const HomeGrid = () => {
  return (
    <div className={style.grid}>
      <div className={`${style.product1} ${style.product}`}>
        <a>Laptop Stands &rarr;</a>
      </div>
      <div className={`${style.product2} ${style.product}`}>
        <a>Wooden Desks &rarr;</a>
      </div>
      <div className={`${style.product3} ${style.product}`}>
        <a>Office Chairs &rarr;</a>
      </div>
    </div>
  )
}

export default HomeGrid