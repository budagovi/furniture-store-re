import style from '../../Layout/Header.module.css';
import image from '../../assets/aboutBackground.jpg';

const Header = () => {
  return (
    <header className={style.wrapper} style={{ backgroundImage: 'url(' + image + ')', textAlign: 'left'}}>
      <div id='background' className={style.background} style={{alignItems: 'flex-start'}}>
        <h1 className='afterLine'>About Us</h1>
      </div>
    </header>
  )
}

export default Header;