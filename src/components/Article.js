import style from './Article.module.css';
import { useState, useEffect } from 'react';

const Article = ({img, text, alt, description, setup, id}) => {

  const [image, setImage] = useState('');
  useEffect(() => {
    const importImage = async () => {
      const response = await import(`../assets/articles/${img}.jpg`);
      setImage(response.default);
    }
    importImage()
  })

  if (setup === 'office') {
    const num = id < 10 ? '0' + id : id;
    return (  
      <div className={style.wrapper}>
        <img src={image} alt={alt}/>
        <span className='preTitle'>{`${setup.toUpperCase()} SETUP / ${num}`}</span>
        <h5>{text}</h5>
        <span className={style.description}>{description}</span>
        <a className={`${style.link} lined`}>View Details &rarr;</a>
      </div>
    )
  }
  else if (setup === 'wfh') {
    const num = id < 10 ? '0' + id : id;
    return (
      <div className={style.grid}>
        <img src={image} alt={alt}/>
        <div className={style.wrapper}>
          <span className='preTitle'>{`${setup.toUpperCase()} SETUP / ${num}`}</span>
          <h5>{text}</h5>
          <span className={style.description}>{description}</span>
          <a className={`${style.link} lined`}>View Details &rarr;</a>
        </div>
      </div>
    )
  }

  return(
    <div className={style.wrapper}>
      <img src={image} alt={alt}/>
      <h5>{text}</h5>
      <a className={`${style.plink} lined`}>View Details &rarr;</a>
    </div>
  )

}

export default Article;