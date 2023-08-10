import { useLoaderData } from 'react-router-dom';
import style from './HomeArticles.module.css';
import Article from '../Article';

const HomeArticles = () => {
  const articles = useLoaderData();
  let i = 1;
  return (
    <div className={style.wrapper}>
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
    </div>
  )
}

export default HomeArticles;