import styles from './styles.module.scss';
import { Category } from '../category';
import Slider from 'react-slick';
import { Progress } from '../slider';
import { useState } from 'react';

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
  arrows: false,
}


export default function Categories() {
  const [slide, setSlide] = useState(0);

  function handleChange(index) {
    setSlide(index);
  }

  return (
    <>
      <div className={styles.grid}>
        {categories.map(category => <Category {...category} />)}
      </div>
      <div className={styles.slider}>
        <Slider {...settings}
          afterChange={handleChange}
        >
          {categories.map(category => (
            <div>
              <Category {...category} />
            </div>
          ))}
        </Slider>
        <Progress progress={(slide+1)/categories.length*100} />
      </div>
    </>
  )
}