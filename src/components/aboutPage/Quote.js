import style from './Quote.module.css';
import {QuoteIcon} from '../../assets/Icons';
import image from '../../assets/profiler-image.jpg';

const Quote = () => {
  return (
    <div className={style.wrapper}>
      <QuoteIcon />
      <h4>Hendrerit ac in aliquet sed etiam interdum ultricies pellentesque egestas convallis etiam elementum enim nisl cursus sit fames malesuada morbi arcu.</h4>
      <div className={style.profiler}>
        <img src={image}/>
        <div className={style.textHolder}>
          <span>Victor Sullivan</span>
          <span>Founder, CEO</span>
        </div>
      </div>
    </div>
  )
}

export default Quote;