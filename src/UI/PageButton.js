import style from './PageButton.module.css';

const PageButton = ({children, onClick}) => {
  return (
    <button className={style.btn} onClick={onClick}>{children}</button>
  )
}

export default PageButton;