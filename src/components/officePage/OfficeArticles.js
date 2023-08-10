import { useLoaderData } from 'react-router-dom';
import ArticlesGrid from '../../Layout/ArticlesGrid';
import Article from '../Article';
import style from './OfficeArticles.module.css';

const OfficeArticles = () => {
  let i = 1;
  const articles = useLoaderData();
  return (
    <div className={style.wrapper}>
      <span className='preTitle'>SHOWCASE</span>
      <h3>Office furniture setups</h3>
      <ArticlesGrid>
        {articles.map(article =>
          <Article
            img={article.img}
            alt={'some text'}
            text={article.title}
            key={article.id}
            setup={article.setup}
            description={article.desc}
            id={i++}
          />
        )}
      </ArticlesGrid>
    </div>
  )
}

export default OfficeArticles;