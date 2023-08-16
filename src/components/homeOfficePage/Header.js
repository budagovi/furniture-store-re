import style from '../../Layout/Header.module.css';
import image from '../../assets/homeOfficeBackground.jpg'

const Header = () => {
  return (
    <header className={style.wrapper} style={{backgroundImage: 'url('+ image +')'}}>
      <div id='background' className={style.background}>
        <div className={style.textHolder}>
          <h1>Work from Home Setups</h1>
          <span>Porta tellus suscipit eget arcu eu nec quis scelerisque nam vitae, turpis integer iaculis tristique vivamus mattis egestas.</span>
        </div>
      </div>
    </header>
  )
}

export default Header;