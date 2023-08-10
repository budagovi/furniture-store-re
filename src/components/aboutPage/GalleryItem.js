import style from './GalleryItem.module.css';
import { useState, useEffect } from 'react';

const GalleryItem = ({img}) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const importImage = async () => {
      const response = await import(`../../assets/gallery/${img}.jpg`);
      setImage(response.default);
    }
    importImage()
  })
  return (
    <div className={style.item}>
      <img src={image}/>
    </div>
  )
}

export default GalleryItem;