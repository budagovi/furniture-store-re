import style from './Gallery.module.css';
import { useLoaderData } from 'react-router-dom';
import GalleryItem from './GalleryItem';

const Gallery = () => {

  const photos = useLoaderData();
  return (
    <div className={style.wrapper}>
      {photos.map( photo => <GalleryItem img={photo} key={photo}/>)}
    </div>
  )
}

export default Gallery;