import style from './ArticlesGrid.module.css';

const ArticlesGrid = ({children}) => {
  return <div className={style.grid}>{children}</div>
}

export default ArticlesGrid;