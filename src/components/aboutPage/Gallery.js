import style from './Gallery.module.css';
import { useLoaderData } from 'react-router-dom';
import GalleryItem from './GalleryItem';

import pic1 from '../../assets/gallery/pic1.jpg'
import pic2 from '../../assets/gallery/pic2.jpg'
import pic3 from '../../assets/gallery/pic3.jpg'
import pic4 from '../../assets/gallery/pic4.jpg'
import pic5 from '../../assets/gallery/pic5.jpg'
import pic6 from '../../assets/gallery/pic6.jpg'



const Gallery = () => {

  const photos = useLoaderData();
  console.log(photos)
  return (
    <div className={style.wrapper}>
      {photos.map( photo => <GalleryItem img={photo} key={photo}/>)}
    </div>
  )
}

export default Gallery;