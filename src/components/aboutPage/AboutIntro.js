import HomeOfficePage from '../../pages/HomeOffice';
import style from './AboutIntro.module.css';
import ArticlesGrid from '../../Layout/ArticlesGrid';

const AboutIntro = () => {
  return (
    <div className={style.wrapper}>
      <ArticlesGrid>
          <span className='preTitle'>OUR STORY</span>
          <span></span>
          <h4 className='afterLineYellow'>The fascination of workspace furniture</h4>
          <div className={style.textHolder}>
            <span>Et arcu eu ultricies pharetra, malesuada congue egestas venenatis pellentesque vitae massa aliquet quis velit elementum.<br/><br/>
            Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa eu consequat ultricies accumsan, a magna morbi egestas augue proin sagittis, sit neque volutpat nisl elit mattis aenean eget eget facilisis massa duis volutpat purus diam nec at orci lacinia lectus id enim diam vivamus euismod nibh venenatis.</span>
          </div>
      </ArticlesGrid>
    </div>
  )
}

export default AboutIntro;