import style from './HomeSection.module.css';
import { Link } from 'react-router-dom';

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
      <Link to='store/tables/1' className={style.sectionItem}>
        <img src={tableImg} alt='Tables'/>
        <span>Tables</span>
      </Link>
      <Link to='store/chairs/1' className={style.sectionItem}>
        <img src={chairImg} alt='Chairs'/>
        <span>Chairs</span>
      </Link>
      <Link to='store/laptop-stands/1' className={style.sectionItem}>
        <img src={laptopStandImg} alt='Laptop Stands'/>
        <span>Laptop Stands</span>
      </Link>
      <Link to='store/monitor-stands/1' className={style.sectionItem}>
        <img src={monitorStandImg} alt='Monitor Stands'/>
        <span>Monitor Stands</span>
      </Link>
      <Link to='store/cabinets/1' className={style.sectionItem}>
        <img src={cabinetImg} alt='Cabinets'/>
        <span>Cabinets</span>
      </Link>
      <Link to='store/mouse-pads/1' className={style.sectionItem}>
        <img src={mouseImg} alt='Mouse Pads'/>
        <span>Mouse Pads</span>
      </Link>
      <Link to='store/study-lamps/1' className={style.sectionItem}>
        <img src={lampImg} alt='Study Lamp'/>
        <span>Study Lamps</span>
      </Link>
      <Link to='store/desk-plants/1' className={style.sectionItem}>
        <img src={plantImg} alt='Desk Plants'/>
        <span>Desk Plants</span>
      </Link>
    </section>
  )
}

export default HomeSection;