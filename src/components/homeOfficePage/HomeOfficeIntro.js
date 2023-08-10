import HomeOfficePage from '../../pages/HomeOffice';
import style from './HomeOfficeIntro.module.css';
import ArticlesGrid from '../../Layout/ArticlesGrid';
import image from '../../assets/articles/intro1.jpg';

const HomeOfficeIntro = () => {
  return (
    <ArticlesGrid>
      <div className={style.textHolder}>
        <span className='preTitle'>WORK FROM HOME</span>
        <h4>Smooth workflow at home with your own working space</h4>
        <section></section>
        <span>Et arcu eu ultricies pharetra, malesuada congue egestas venenatis pellentesque vitae massa aliquet quis velit elementum.</span>
        <span>Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa eu consequat ultricies accumsan, a magna morbi egestas augue proin sagittis, sit neque volutpat nisl elit mattis aenean eget eget facilisis massa duis volutpat purus diam nec at orci lacinia lectus id enim diam vivamus euismod nibh venenatis.</span>
        <a className='lined yellowLine'>Learn More &rarr;</a>
      </div>
      <img src={image}/>
    </ArticlesGrid>
  )
}

export default HomeOfficeIntro;