import styles from './styles.module.scss';
import { Category } from '../category';
import Slider from 'react-slick';
import { Progress } from '../slider';

const categories = [
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
  {
    name: 'смартфоны',
  },
]

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 1,
}


export default function Categories() {
  return (
    <>
      <div className={styles.grid}>
        {categories.map(category => <Category {...category} />)}
      </div>
      <div className={styles.slider}>
        <Slider {...settings}>
          {categories.map(category => (
            <div>
              <Category {...category} />
            </div>
          ))}
        </Slider>
        <Progress />
      </div>
    </>
  )
}