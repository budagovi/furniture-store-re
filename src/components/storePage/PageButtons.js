import style from './PageButtons.module.css';
import PageButton from '../../UI/PageButton';
import { NavLink, Link } from 'react-router-dom';

const PageButtons = ({pagesNum, currPage}) => {

  let i = pagesNum;
  const pages = [];
  while(i--) pages.push(i+1);

  const nextPage =(
    <Link to={`./${+currPage+1}`}>
      <PageButton>&rarr;</PageButton>
    </Link>
  )

  const prevPage = (
    <Link to={`./${+currPage-1}`}>
      <PageButton>&larr;</PageButton>
    </Link>
  )

  const checkPage = (page) => currPage == page;

  return (
    <div className={style.buttons}>
      {currPage < pagesNum && nextPage}
      {pages.map(page => 
        <NavLink 
          to={page!==1 ? './' + page : '.'} 
          key={page}>
          <PageButton className={checkPage(page) ? style.active : undefined}>{page}</PageButton>
        </NavLink>
      )}
      {currPage > 1 && prevPage}
    </div>
  )
}

export default PageButtons;