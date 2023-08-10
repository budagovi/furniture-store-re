import style from './HomeSection.module.css';

//images
import tableImg from '../../assets/SectionIcons/work-table.png';
import chairImg from '../../assets/SectionIcons/chair.png';
import laptopStandImg from '../../assets/SectionIcons/laptop.png';
import monitorStandImg from '../../assets/SectionIcons/monitor.png';
import cabinetImg from '../../assets/SectionIcons/file-cabinet.png';
import mouseImg from '../../assets/SectionIcons/computer-mouse.png';
import lampImg from '../../assets/SectionIcons/desk-lamp.png';
import plantImg from '../../assets/SectionIcons/plant-pot.png';

const HomeSection = () => {
  return (
    <section className={style.wrapper}> 
      <div className={style.sectionItem}>
        <img src={tableImg} alt='Tables'/>
        <span>Tables</span>
      </div>
      <div className={style.sectionItem}>
        <img src={chairImg} alt='Chairs'/>
        <span>Chairs</span>
      </div>
      <div className={style.sectionItem}>
        <img src={laptopStandImg} alt='Laptop Stands'/>
        <span>Laptop Stands</span>
      </div>
      <div className={style.sectionItem}>
        <img src={monitorStandImg} alt='Monitor Stands'/>
        <span>Monitor Stands</span>
      </div>
      <div className={style.sectionItem}>
        <img src={cabinetImg} alt='Cabinets'/>
        <span>Cabinets</span>
      </div>
      <div className={style.sectionItem}>
        <img src={mouseImg} alt='Mouse Pads'/>
        <span>Mouse Pads</span>
      </div>
      <div className={style.sectionItem}>
        <img src={lampImg} alt='Study Lamp'/>
        <span>Study Lamps</span>
      </div>
      <div className={style.sectionItem}>
        <img src={plantImg} alt='Desk Plants'/>
        <span>Desk Plants</span>
      </div>
    </section>
  )
}

export default HomeSection;