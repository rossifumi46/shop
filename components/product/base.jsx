import Image from 'next/image'
import styles from './styles.module.scss'
import VerticalSlider, { images } from './slider'
import Info from './info'
import { useState } from 'react';

export default function Base() {
  const [image, setImage] = useState(images[0]); 

  const handleClick= (image) => {
    setImage(image);
  }

  return (
    <div className={styles.base}>
      <div className={styles.gallery}>
        <VerticalSlider onClick={handleClick} />
        <div className={styles.image}>
          <Image objectFit="contain" src={image} alt=""/>
        </div>
      </div>
      <Info />
    </div>
  )
}