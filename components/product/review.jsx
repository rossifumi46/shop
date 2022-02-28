import styles from './reviews.module.scss';
import { StarIcon } from '../../icons/Star';

export default function Review() {
  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <img className={styles.avatar} src="" alt=""/>
        <span className={styles.name}>Александр</span>
        <div className={styles.right}>
          <span className={styles.date}>19 мая 2021</span>
          <div className={styles.stars}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <span className={styles.title}>Достоинства:</span>
        <p>Очень тихий, совсем не греется, тонкий, лёгкий и красивый :) Офигенный звук и картинка.</p>
      </div>

      <div className={styles.text}>
        <span className={styles.title}>Комментарий</span>
        <p>Сложно что-то сказать пока что, тк это первый макбук и очень не привычная ось после винды. И казалось, что будет маленьким экран. Но вполне достаточно! На фото лежит с айпадом вторым (для сравнения размера)</p>
      </div>
      
      <div className={styles.text}>
        <span className={styles.title}>Комментарий</span>
        <p>Сложно что-то сказать пока что, тк это первый макбук и очень не привычная ось после винды. И казалось, что будет маленьким экран. Но вполне достаточно! На фото лежит с айпадом вторым (для сравнения размера)</p>
      </div>
      <div className={styles.grid}>
        <img className={styles.image} src="" alt=""/>
        <img className={styles.image} src="" alt=""/>
        <img className={styles.image} src="" alt=""/>
      </div>
    </div>
  )
}