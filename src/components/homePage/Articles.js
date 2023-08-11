import style from './Articles.module.css';
import Article from '../Article';
import { useLoaderData } from 'react-router-dom';
import ArticlesGrid from '../../Layout/ArticlesGrid';

const Articles = () => {

  const articles = useLoaderData();

  return (
    <div className={style.wrapper}>
      <span className='preTitle'>WORK FROM HOME</span>
      <ArticlesGrid>
        <div className={style.spanHolder}>
          <h3>Keep inspired & motivated</h3>
        </div>
        <div className={style.spanHolder}>
          <span>
            Etiam eros at pharetra lectus ante dignissim metus, facilisi faucibus aliquet senectus viverra 
            tellus cras enim, auctor proin volutpat, ut leo egestas faucibus sagittis
          </span>
        </div>
        {articles.filter(article => !article.setup)
          .map( article => 
            <Article 
              img={article.img} 
              alt={'some text'}
              text={article.title}
              key={article.id}
            />
          )}
      </ArticlesGrid>
    </div>
  )
}

export default Articles;