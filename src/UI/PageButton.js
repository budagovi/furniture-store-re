import style from './PageButton.module.css';

const PageButton = ({text}) => {

  const arrow= <span>&rarr;</span>
  
  return (
    <button className={style.btn}>{text ? text : arrow}</button>
  )
}

export default PageButton;