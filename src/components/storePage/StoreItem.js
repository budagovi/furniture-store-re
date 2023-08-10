import style from './StoreItem.module.css';
import { useState, useEffect } from 'react';

const StoreItem = ({img, name, price}) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const importImage = async () => {
      const response = await import(`../../assets/products/${img}.jpg`);
      setImage(response.default);
    }
    importImage()
  })
  
  return (
    <div className={style.wrapper}>
      <img src={image} />
      <div className={style.textHolder}>
        <span>{name}</span>
        <span>${price.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default StoreItem;