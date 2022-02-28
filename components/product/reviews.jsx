import styles from './reviews.module.scss';
import Review from './review'
import pageStyles from './styles.module.scss';
import { MoreBtn } from '../../pages/favourite';
import { StarIcon } from '../../icons/Star';

const reviews = [
  {

  },
]

export default function Reviews() {
  return (
    <div>
      <h3 className={styles.reviewsTitle}>Отзывы о товаре</h3>
      <div className={styles.row}>
        <div className={styles.list}>
        <div className="flex justify-center flex-col">
          <div className={styles.media}>
            <span className={styles.title}>Фото и Видео покупателей</span>
            <div className={styles.mediaImages}>
              <img className={styles.mediaImage} />
              <img className={styles.mediaImage} />
              <img className={styles.mediaImage} />
              <img className={styles.mediaImage} />
              <img className={styles.mediaImage} />
              <img className={styles.mediaImage} />
              <img className={styles.mediaImage} />
            </div>
            <div className={pageStyles.hr} />
          </div>
          {reviews.map(review => <Review />)}
          <MoreBtn />
        </div>
      </div>
        <div className={styles.cards}>
          <div className={styles.seller}>
            <img className={styles.seller_logo} alt=""/>
            <span className={styles.seller_key}>Продавец</span>
            <span className={styles.seller_name}>Apple</span>
            <button className={styles.btn}>Задать вопрос продавцу</button>
          </div>
          <div className={styles.rating_container}>
            <div className="flex">
              <span className={styles.rate}>5/5</span>
              <div className={styles.stars}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="hr mt-[9px] mb-[10px]" />
            <div className={styles.rating}>
              <span className={styles.mark}>5 звезд</span>
              <div className={styles.rating_line} />
              <span>0</span>
            </div>
            <div className={styles.rating}>
              <span>5 звезд</span>
              <div className={styles.rating_line} />
              <span>0</span>
            </div>
            <div className={styles.rating}>
              <span>5 звезд</span>
              <div className={styles.rating_line} />
              <span>0</span>
            </div>
            <div className={styles.rating}>
              <span>5 звезд</span>
              <div className={styles.rating_line} />
              <span>0</span>
            </div>
            <div className={styles.rating}>
              <span>5 звезд</span>
              <div className={styles.rating_line} />
              <span>0</span>
            </div>
            <button className={styles.btn}>Оставить отзыв</button>
          </div>
        </div>
      </div>
    </div>
  )
}