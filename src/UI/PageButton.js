import style from './PageButton.module.css';

const PageButton = ({children, onClick, className}) => {

  let classes = `${style.btn} ${style.inActive}`;
  if(className) classes = `${style.btn} ${className}`;
  return (
    <button className={classes} onClick={onClick}>{children}</button>
  )
}

export default PageButton;