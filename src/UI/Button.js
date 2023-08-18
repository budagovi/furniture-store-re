import style from './Button.module.css';

const Button = ({type, children, disabled, onClick}) => {
  return (
    <button className={style.btn} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;