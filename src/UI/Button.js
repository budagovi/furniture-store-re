import style from './Button.module.css';

const Button = ({type, children}) => {
  return (
    <button className={style.btn} type={type}>
      {children}
    </button>
  )
}

export default Button;