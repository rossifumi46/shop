import styles from './styles.module.scss';
import DownArrowIcon from '../../icons/DownArrow';
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
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

export default function VerticalSlider({ progress }) {
  return (
    <div className={styles.slider}>
      <div>
        <Slider {...settings}>
          <div className={styles.slide}><img src="" alt=""/></div>
          <div className={styles.slide}><img src="" alt=""/></div>
          <div className={styles.slide}><img src="" alt=""/></div>
          <div className={styles.slide}><img src="" alt=""/></div>
          <div className={styles.slide}><img src="" alt=""/></div>
          <div className={styles.slide}><img src="" alt=""/></div>
          <div className={styles.slide}><img src="" alt=""/></div>
        </Slider>
      </div>
      <span className={styles.arrow}>
        <DownArrowIcon />
      </span>
    </div>
  )
}