import styles from './styles.module.scss';
import DownArrowIcon from '../../icons/DownArrow';
import Slider from "react-slick";
import slide_1 from "../../images/item.png";
import slide_2 from "../../images/phone.png";
import slide_3 from "../../images/image1.jpg";
import slide_4 from "../../images/image2.jpg";
import slide_5 from "../../images/image3.jpg";
import slide_6 from "../../images/image4.jpg";
import Image from 'next/image';
import { useRef } from 'react';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        vertical: false,
        verticalSwiping: false,
      }
    }
  ]
};

export const images = [
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  slide_6,
];

export default function VerticalSlider({ onClick }) {
  const ref = useRef(null);

  function next() {
    ref.current.slickNext();
  }

  return (
    <div className={styles.slider}>
      <div>
        <Slider {...settings}
          ref={ref}
        >
          {images.map(image => (
            <div className={styles.slide} onClick={() => onClick(image)}>
              <div>
                <Image src={image} width="92px" height="82px" objectFit="contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <span className={styles.arrow} onClick={next} >
        <DownArrowIcon />
      </span>
    </div>
  )
}