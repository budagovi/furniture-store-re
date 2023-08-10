import style from './OfficeIntro.module.css';
import ArticlesGrid from '../../Layout/ArticlesGrid';

const OfficeIntro = () => {
  return (
    <div className={style.wrapper}>
    <span className='preTitle'>OFFICE FURNITURE</span>
    <ArticlesGrid>
      <h3>Enhance working experience</h3>
      <div className={style.textHolder}>
        <span>
          Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa eu 
          consequat ultricies accumsan, a magna morbi egestas augue proin sagittis, 
          sit neque volutpat nisl elit mattis aenean eget eget facilisis massa duis 
          volutpat purus diam nec at orci lacinia lectus id enim diam vivamus euismod nibh venenatis.
        </span>
        <a className='lined yellowLine'>Learn More</a>
      </div>
    </ArticlesGrid>
    </div>
  )
}

export default OfficeIntro;