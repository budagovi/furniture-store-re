import style from './Button.module.css';

const Button = ({type, children, disabled}) => {
  return (
    <button className={style.btn} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;