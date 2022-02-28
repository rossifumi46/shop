import Image from 'next/image'
import styles from './styles.module.scss'
import VerticalSlider from './slider'
import Info from './info'
import image from '../../images/product.png'

export default function Base() {
  return (
    <div className={styles.base}>
      <div className={styles.gallery}>
        <VerticalSlider />
        <div className={styles.image}>
          <Image layout="responsive" src={image} alt=""/>
        </div>
      </div>
      <Info />
    </div>
  )
}