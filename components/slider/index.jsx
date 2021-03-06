import ProductCard from "../product-card";
import phone from '../../images/phone.png';
import Slider from "react-slick";
import styles from './styles.module.scss';
import { RightArrow } from '../../icons/RightArrow';
import { LeftArrow } from '../../icons/LeftArrow';
import { Title } from "../title";
import { useState } from "react";

const products = [
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    isNew: true,
    sale: 20,
    price: 100000,
    image: phone,
    liked: true,
  },
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    new: true,
    sale: 20,
    price: 100000,
    image: phone,
  },
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    new: true,
    sale: 20,
    price: 100000,
    image: phone,
  },
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    new: true,
    sale: 20,
    price: 100000,
    image: phone,
  },
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    new: true,
    sale: 20,
    price: 100000,
    image: phone,
  }
]

const ArrowLeft = (props) => (
  <span {...props} className={styles.left}>
    <LeftArrow />
  </span>
);
const ArrowRight = (props) => (
  <span {...props} className={styles.right}>
    <RightArrow />
  </span>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 4,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
};

export const Progress = ({ progress }) => <div className={styles.progress_container}>
  <div className={styles.progress} style={{ width: `${progress}%` }}  />
</div>

function CustomSlider({ title }) {
  const [slide, setSlide] = useState(0);

  function handleChange(index) {
    setSlide(index);
  }

  return (
    <div className={styles.slider_wrapper}>
      <Title title={title} />
      <div className={styles.slider}>
      <Slider
        {...settings}
        afterChange={handleChange}
      >
        {products.map((product, index) => (
          <div className={styles.ml}>
            <ProductCard key={index} product={product} />
          </div>
        ))}
      </Slider>
      </div>
      <Progress progress={(slide+1)/products.length*100} />
    </div>
  )
}

export default CustomSlider;