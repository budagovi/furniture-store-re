import style from './Header.module.css';

const OfficeHeader = () => {
  return (
    <header className={style.wrapper}>
      <div id='background' className={style.background}>
        <h1>Contact Us</h1>
      </div>
    </header>
  )
}

export default OfficeHeader;