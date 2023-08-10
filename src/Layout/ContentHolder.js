import style from './ContentHolder.module.css';

const ContentHolder = ({children}) => {
  return <div className={style.wrapper}>{children}</div>
}

export default ContentHolder;
